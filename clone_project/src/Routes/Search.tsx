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
  box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);
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
  padding: 20px;
  background-color: ${(props) => props.theme.black.darker};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 14px;
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
  width: 50vw;
  height: 80vh;
  background-color: ${(props) => props.theme.black.darker};
  box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow-y: scroll;
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
      duration: 0.3,
      type: 'tween',
    },
  },
};
const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
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
  const movieMatch = useMatch('/search/movies/:movieId');
  const tvMatch = useMatch(`/search/tv/:tvId`);
  const { scrollY } = useViewportScroll();
  const { data, isLoading } = useQuery<ISearchResult>(['search', keyword], () =>
    searchAll(keyword)
  );
  const onClickBox = (mediaType: string, searchId: number) => {
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
                      onClickBox(search.media_type, search.id);
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
                      onClickBox(search.media_type, search.id);
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
                    <h1>{'찾으시는 결과가 없습니다.'}</h1>
                  </Box>
                )}
              </AnimatePresence>
            ))}
          </BoxContainer>
          <AnimatePresence>
            {movieMatch ? (
              <Overlay
                onClick={onOverlayClick}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <BigMovie
                  style={{
                    top: scrollY.get() + 100,
                    bottom: scrollY.get() + 100,
                  }}
                  layoutId={movieMatch.params.movieId}
                >
                  
                </BigMovie>
              </Overlay>
            ) : null}
            {tvMatch ? (
              <Overlay
                onClick={onOverlayClick}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <BigMovie
                  style={{
                    top: scrollY.get() + 100,
                    bottom: scrollY.get() + 100,
                  }}
                  layoutId={tvMatch.params.tvId}
                >
                  
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