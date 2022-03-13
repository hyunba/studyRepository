import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react";

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: gray;
  flex-direction: column;
`;



const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition:{
      duration: 1,
    },
  },
  exit: {
    x: -500, opacity: 0, scale: 0, transition:{ duration: 1 }
  },
};



// framer motion을 div나 span에 하기 위해서는 motion.div, motion.span으로 지정해주어야한다.
function App() {
  const [visivle, setVisivle] = useState(1);
  const nextPlease = () => setVisivle((prev) => (prev === 10 ? 10 : prev + 1));
  const prevPlease = () => setVisivle((prev) => (prev === 1 ? 1 : prev - 1));
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (i === visivle ? (<Box variants={box} initial="invisible" animate="visible" exit="exit" key={i}>{i}</Box>) : null))}
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}

export default App;
