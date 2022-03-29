import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react";
// AnimatePresence는 Animate를 Exit 해준다. (initial, animate, exit)

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px
  div: first-child,
  div: last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 5:19
function App() {
  const [clicked, setClicked] = useState(false);
  const toggle = () => setClicked(prev => !prev);
  return (
    <Wrapper onClick={toggle}>
      <Grid>
        <Box />
        <Box />
        <Box />
        <Box />
      </Grid>
      <AnimatePresence> {clicked ? <Overlay initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
        <Box/>
      </Overlay> : null} </AnimatePresence>

    </Wrapper>
  );
}

export default App;
