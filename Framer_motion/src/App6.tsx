import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  width: 50vw;
  gap: 10px;
`;
const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled(motion.div)`
  background-color: #000000;
  height: 50px;
  width: 50px;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Btn = styled.button`
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [id, setId] = useState(null);
  const [clicked, setClicked] = useState(false);
  const togglebtn = () => setClicked((prev) => !prev);

  return (
    <Wrapper>
      <Grid onClick={id}>
        {/* {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
        ))} */}
        <Box onClick={() => setId(1)} key={1} layoutId="dd" />
        <Box>
          {!clicked ? ( //둘의 UI는 같다는 것을 의미하기 위해 layoutId를 이름을 동일하게 함.
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
          ) : null}
        </Box>
        <Box>
          {clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
          ) : null}
        </Box>
        <Box onClick={() => setId(2)} key={2} layoutId={2} />
      
      </Grid>
      <Btn onClick={togglebtn}>click</Btn>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId="dd" style={{ width: 300, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );