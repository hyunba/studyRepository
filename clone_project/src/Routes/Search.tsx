import { useQuery } from 'react-query';
import { useLocation, useNavigate, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { ISearchResult, searchAll } from '../api';
import { makeImagePath } from './utils';
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';

const Wrapper = styled.div`
  background-color: black;
  margin: 100px 0px;
  width: 100%;
`;
const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchTitle = styled.h1`
  padding: 0px 60px;
  color: gray;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 60px;
  gap: 10px;
`;
const Box = styled(motion.div)<{ bgPhoto: string }>`
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  margin-bottom: 20px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`;

const MediaType = styled.div`
  background-color: teal;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -20px;
  left: -10px;
  span {
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
`;
const Info = styled(motion.div)`
  background-color: ${(props) => props.theme.black.darker};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    color: gray;
    text-align: center;
    font-size: 15px;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  backgroundColor: whitesmoke;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${props => props.theme.black.lighter};
  border-radius: 15px;
  overflow:hidden;
`;
// position: absolute;
//     width: 40vw;
//     height: 80vh;
//     backgroundColor: whitesmoke;
//     left: 0;
//     right: 0;
//     margin: 0 auto;
//     background-color: ${props => props.theme.black.lighter};
//     border-radius: 15px;
//     overflow:hidden;
const MovieCover = styled.img`
    width: 100%;
    background-size: cover;
    background-position: center center;
    height: 400px;
    
`;
const MovieTitle = styled.h3`
    color: gray;
    padding:10px;
    position: relative;
    top:-60px;
    font-size:20px;
`;
const MovieCoverInfo = styled.p`
    padding: 20px;
    position: relative;
    top: -80px;
    color: white;
`;


const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -30,
    zIndex: 99,
    transition: {
      delay: 0.5,
      duration: 0.1,
      type: 'tween',
    },
  },
};
const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.1,
      type: 'tween',
    },
  },
};
interface SearchProps {
  search: string;
}

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation() as SearchProps;
  const keyword = new URLSearchParams(location.search).get('keyword');
  // const movieMatch = useMatch('/search/movies/:movieId');
  const movieMatch = useMatch("/search/movies/:id");
  const tvMatch = useMatch(`/search/tv/:id`);
  const { scrollY } = useViewportScroll();
  const { data, isLoading } = useQuery<ISearchResult>(['search', keyword], () =>
    searchAll(keyword)
  );
  const onBoxClicked = (mediaType: string, searchId: number) => {
    if (mediaType === 'movie') {
      navigate(`/search/movies/${searchId}`);
    } else if (mediaType === 'tv') {
      navigate(`/search/tv/${searchId}`);
    } else {
      return;
    }
  };

  const onOverlayClick = () => {
    navigate(-1);
  };

  const clickedMovie = movieMatch?.params.id && data?.results.find(movie => movie.id+"" === movieMatch.params.id);
  const clickedTv = tvMatch?.params.id && data?.results.find(tv => tv.id+"" === tvMatch.params.id);
  console.log(clickedMovie)
  return (
    <Wrapper>
      
      <>
        <title>{`Search | ${keyword}`}</title>
      </>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <SearchTitle>{`Movie ${keyword} 검색결과`}</SearchTitle>
          <BoxContainer>
            {data?.results.map((search) => (
              <AnimatePresence>
                {search.media_type === 'movie' && (
                  <Box
                    initial="normal"
                    whileHover="hover"
                    variants={boxVariants}
                    key={search.id}
                    onClick={() => {
                      onBoxClicked(search.media_type, search.id);
                    }}
                    bgPhoto={
                      search.backdrop_path
                        ? makeImagePath(search.backdrop_path, 'w500')
                        : makeImagePath(search.poster_path, 'w500')
                    }
                  >
                    <MediaType>
                      {' '}
                      <span>{search.media_type}</span>
                    </MediaType>
                    <Info variants={infoVariants}>
                      <h4>{search.title ? search.title : search.name}</h4>
                    </Info>
                  </Box>
                )}
              </AnimatePresence>
            ))}
          </BoxContainer>
          <SearchTitle>{`Tv Show ${keyword} 검색결과`}</SearchTitle>
          <BoxContainer>
            {data?.results.map((search) => (
              <AnimatePresence>
                {search.media_type === 'tv' && (
                  <Box
                    initial="normal"
                    whileHover="hover"
                    variants={boxVariants}
                    key={search.id}
                    onClick={() => {
                      onBoxClicked(search.media_type, search.id);
                    }}
                    bgPhoto={
                      search.backdrop_path
                        ? makeImagePath(search.backdrop_path, 'w500')
                        : makeImagePath(search.poster_path, 'w500')
                    }
                  >
                    <MediaType>
                      {' '}
                      <span>{search.media_type}</span>
                    </MediaType>
                    <Info variants={infoVariants}>
                      <h4>{search.name}</h4>
                    </Info>
                    {/* <h1>{'찾으시는 결과가 없습니다.'}</h1> */}
                  </Box>
                )}
              </AnimatePresence>
            ))}
          </BoxContainer>
          <AnimatePresence>
            {movieMatch ? (
              <>
              <Overlay
                onClick={onOverlayClick}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <BigMovie
                  style={{top: scrollY.get() + 50}}
                  layoutId={movieMatch.params.id}
                >
                  {clickedMovie && <>
                    <MovieCover style={{backgroundImage:`linear-gradient(to top, black, transparent), url(${makeImagePath(clickedMovie.backdrop_path,"w500")})`,}}/>
                    <MovieTitle>{clickedMovie.title}</MovieTitle>
                    <MovieCoverInfo>{clickedMovie.overview}</MovieCoverInfo>
                  </>}
                </BigMovie>
              </Overlay>
              </>
            ) : null}
            {tvMatch ? (
              <Overlay
                onClick={onOverlayClick}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <BigMovie
                  style={{top: scrollY.get() - 150}}
                  layoutId={tvMatch.params.id}
                >
                  {clickedTv && <>
                    <MovieCover style={{backgroundImage:`linear-gradient(to top, black, transparent), url(${makeImagePath(clickedTv.backdrop_path,"w500")})`,}} />
                    <MovieTitle>{clickedTv.title}</MovieTitle>
                    <MovieCoverInfo>{clickedTv.overview}</MovieCoverInfo>
                  </>}
                </BigMovie>
              </Overlay>
            ) : null}
            
          </AnimatePresence>
          
        </>
      )}
    </Wrapper>
  );
};

export default Search;