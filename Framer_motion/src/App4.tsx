import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react";

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background: gray;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle2 = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box2 = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


// framer motion을 div나 span에 하기 위해서는 motion.div, motion.span으로 지정해주어야한다.
function App() {
  const [clicked, setClicked] = useState(false);
  const togglebtn = () => setClicked((prev)=>!prev);
  return (
    <Wrapper>
      <Box onClick={togglebtn}>
        {!clicked ? ( //둘의 UI는 같다는 것을 의미하기 위해 layoutId를 이름을 동일하게 함.
          <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box onClick={togglebtn}>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 0, scale: 1 }} />
        ) : null}
      </Box>

      <Box2 onClick={togglebtn} style={{ justifyContent: clicked ? "center" : "flex-start", alignItems: clicked ? "center":"flex-start", }}>
        <Circle2 layout />
      </Box2>
    </Wrapper>
  );
}

export default App;
