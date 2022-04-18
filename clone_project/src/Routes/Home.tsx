import styled from "styled-components";
import { useQuery } from "react-query";
import { getMovies, GetMoviesResult } from "../api";
import { makeImagePath } from "./utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
    background: black;
`;

const Loader = styled.div`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Banner = styled.div<{bgPhoto:string}>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url(${(props) =>props.bgPhoto});
    background-size: cover;
`;
//포지션은 상하좌우 센터
const Title = styled.h2`
    color: white;
    font-size: 58px;
    margin-bottom: 5px;
`;

const Overview = styled.p`
    color: white;
    font-size: 26px;
    width: 50%;
`;

const Slider = styled.div`
    position: relative;
    top:-200px;
`;

const Row = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;
    margin bottom: 5px;
    position: absolute;
    width: 100%;
`;
// 컴포넌트에 prop이 정의되지 않았기때문에 직접 정의해준다.
const Box = styled(motion.div)<{bgPhoto:string}>`
    background-color: white;
    height: 180px;
    background-image: url(${(props)=>props.bgPhoto});
    background-size: cover;
    background-position: center center;
    &:first-child {
        transform-origin: center left;
    }
    &:last-child {
        transform-origin: center right;
    }
`;
const Info = styled(motion.div)`
    background-color: ${(props)=> props.theme.black.lighter};
    opacity:0;
    position: absolute;
    width: 100%;
    bottom: 0;
    h4{
        text-align: center;
        font-size: 15px;
    }
`;

const rowVariants = {
    hidden: {
        x: window.outerWidth + 5,
    },
    visible: {
        x: 0,
    },
    exit: {
        x: -window.outerWidth - 5,
    },
}
const boxVariants = {
    normal: {
        scale: 1,
    },
    hover: {
        zIndex: 99,
        scale: 1.3,
        y: -40,
        transition: {
            delay: 0.2,
            duration: 0.1,            
        },
    },
};
const infoVariants = {
    hover: {
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.1,            
        },
    },
};

const offset = 6;
// [1~18].slice(offset*page, offset*page+offset) 처음 페이지는 0이므로 0~6개 출력 
// {data?.results.slice(1).slice(offset*index...} slice(1)을하면 처음 출력한 영화는 제외


function Home() {
    const { data, isLoading } = useQuery<GetMoviesResult>(["movies", "nowPlaying"], getMovies);
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const increaseIndex = () => {
        if(data){
        if(leaving) return;
        setLeaving(true);
        const totalMovies = data.results.length - 1; //영화 하나는 배너로 쓰고있으니 하나빼줌
        const maxIndex = Math.ceil(totalMovies/offset)-1; // math.ceil은 올림. math.floor는 내림
        // maxIndex를 하는 의미는 영화의 최대 갯수 페이지를 정해서 슬라이드를 반복시키기 위함
        setIndex((prev) => prev === maxIndex ? 0 : prev+1); // maxIndex가 현재 4일텐데 4까지 상승하다 같아지면 다시 0으로 되돌아옴
    }}; // 연속으로 클릭 시 빈 공간 발생하는데 setLeaving을 통해 하나가 완료가 될때만 클릭되게함.
    const toggleLeaving = () => setLeaving((prev)=>!prev); // onExitComplete에 사용되는 토글인데 Exit가 되면 setLeaving을 원상복구한다.
    return (
        <Wrapper>
            {isLoading ? (
                <Loader>
                    Loading...
                </Loader>
                ) : (
                    <>
                        <Banner onClick={increaseIndex} bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
                            <Title>{data?.results[0].title}</Title>
                            <Overview>{data?.results[0].overview}</Overview>
                        </Banner>
                        <Slider>
                            <AnimatePresence initial={false} onExitComplete={toggleLeaving}> 
                                <Row variants={rowVariants} initial="hidden" animate="visible" exit="exit" key={index} transition={{type:"tween", duration:1}}>
                                    {data?.results.slice(1).slice(offset*index, offset*index+offset).map((movie)=>(
                                        <Box key={movie.id} initial="normal" variants={boxVariants} whileHover="hover" bgPhoto={makeImagePath(movie.backdrop_path, "w500")}>
                                            
                                            <Info variants={infoVariants}><h4>{movie.title}</h4></Info>
                                        </Box>
                                    ))}
        
                                </Row>
                            </AnimatePresence>
                        </Slider>
                    </>
                )}
        </Wrapper>
    );
}
export default Home;