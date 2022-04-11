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
    background-color: red;
    background-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url(${(props) =>props.bgPhoto});
    background-size: cover;
`;

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
`;

const Row = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin bottom: 5px;
    position: absolute;
    width: 100%;
`;

const Box = styled(motion.div)`
    background-color: white;
    height: 200px;
`;
const rowVariants = {
    hidden: {
        x: 1000,
    },
    visible: {
        x: 0
    },
    exit: {
        x: -1000,
    },
}
//08:05
function Home() {
    const { data, isLoading } = useQuery<GetMoviesResult>(["movies", "nowPlaying"], getMovies);
    const [index, setIndex] = useState(0);
    const increaseIndex = () => setIndex((prev) => prev+1);
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
                            <AnimatePresence>
                                <Row variants={rowVariants} initial="hidden" animate="visible" exit="exit" key={index}>
                                    <Box />
                                    <Box />
                                    <Box />
                                    <Box />
                                    <Box />
                                    <Box />
                                </Row>
                            </AnimatePresence>
                        </Slider>
                    </>
                )}
        </Wrapper>
    );
}
export default Home;