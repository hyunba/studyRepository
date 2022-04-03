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
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  // const [clicked, setClicked] = useState(false);
  // const toggle = () => setClicked(prev => !prev);
  const [id, setId] = useState<null|string>(null);
  return (
    // <Wrapper onClick={toggle}>
    <Wrapper>
      <Grid>
        {/* <Box layoutId="gg" />
        <Box />
        <Box />
        <Box /> */}
        {["1", "2", "3", "4"].map((n)=> ( <Box onClick={() => setId(n)} key={n} layoutId={n} /> ))}
      </Grid>{/*() => setId의 의미는 이것을 클릭했을때만 실행해주세요! 라는 뜻*/}
      <AnimatePresence> {id ? <Overlay onClick={()=> setId(null)} initial={{ backgroundColor: "rgba(0, 0, 0, 0)"}} animate={{backgroundColor: "rgba(0, 0, 0, 0.7)"}} exit={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
        {/* <Box layoutId="gg" style={{width:400, height:200}}/> */}
        <Box layoutId="id" style={{width:400, height:200}}/>
      </Overlay> : null} </AnimatePresence>

    </Wrapper>
  );
}

export default App;
