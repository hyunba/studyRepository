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
  margin: 20px;
  width: 200px;
  height: 200px;
  background-color: black;
  border-radius: 15px;
  box-shadow: 0 2p 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box2 = styled(motion.div)`
  margin: 20px;
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: black;
  border-radius: 40px;
  box-shadow: 0 2p 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  place-self: center;
  background-color: white;
  border-radius: 35px;
  box-shadow: 0 2p 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// 변수로 motion에 넣고 싶으면 variants를 사용해서 변수이름을 넣고 initial, animate에 적용 시켜준다.
const boxVariants = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: {type: "spring", damping: 5} },
};

const box2Variants= {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity:1,
    scale:1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce:0.5,
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

// framer motion을 div나 span에 하기 위해서는 motion.div, motion.span으로 지정해주어야한다.
function App() {
  return (
    <Wrapper>
      <Box 
        variants={boxVariants} 
        initial="start"
        animate="end"  
      />

      <Box2
        variants={box2Variants}
        initial="start"
        animate="end"
      >
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
      </Box2>

      <motion.div>    
      </motion.div> 
    </Wrapper>
  );
}

export default App;