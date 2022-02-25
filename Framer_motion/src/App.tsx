import styled from "styled-components";
import {motion} from "framer-motion"

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
// styled-components에도 motion을 적용하고 싶은데 <motion.Box />는 motion에 포함되지 않기 때문에 styled에 직접 적용시켜준다.
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: black;
  border-radius: 15px;
  box-shadow: 0 2p 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// framer motion을 div나 span에 하기 위해서는 motion.div, motion.span으로 지정해주어야한다.
function App() {
  return (
    <Wrapper>
      <Box 
        transition={{ type: "spring", damping: 5 }} 
        initial={{ scale: 0 }} 
        animate={{ scale: 1, rotateZ: 360 }} 
      />
      <motion.div> 
      
      </motion.div> 
    </Wrapper>
  );
}

export default App;
