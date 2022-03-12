import styled from "styled-components";
import {AnimatePresence, motion, useMotionValue, useTransform, useViewportScroll} from "framer-motion"
import { useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: gray;
`;

const BiggerBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: gray;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// styled-components에도 motion을 적용하고 싶은데 <motion.Box />는 motion에 포함되지 않기 때문에 styled에 직접 적용시켜준다.
const Box1 = styled(motion.div)`
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

const Box3 = styled(motion.div)`
  margin: 20px;
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: black;
  border-radius: 40px;
  box-shadow: 0 2p 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box4 = styled(motion.div)`
  margin: 20px;
  width: 100px;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: black;
  border-radius: 15px;
  box-shadow: 0 2p 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box5 = styled(motion.div)`
  margin: 20px;
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 100px;
  background-color: black;
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
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

const box3Variants= {
  click: {scale: 1, borderRadius: "100px"},
  drag: {backgroundColor: "pink"},
  hover: {scale: 1, rotateZ: 90},
};

const box4Variants= {
  click: {borderRadius: "100px"},
  hover: {rotateZ: 90},
};

const box5Variants = {
  initial: {
    opacity:0,
    scale:0,
  },
  visible: {
    opacitiy: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity:0,
    scale:0,
    y: 50,
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

const Svg = styled.svg`
  width: 400px;
  height: 400px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    fill: "rgba(255, 255, 255, 1)",
    pathLength: 1,
  },
};

// framer motion을 div나 span에 하기 위해서는 motion.div, motion.span으로 지정해주어야한다.
function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const transValue = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(x, [-800, 800], ["linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238)",
                                                 "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0)"]);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const [showing, setShowing] = useState(false);
  const toggleBtn = () => setShowing((prev) => !prev);
  return (
    <Wrapper style={{ background: gradient }}>
      <Box1 
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

      <Box5 style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />

      <BiggerBox ref={biggerBoxRef}>
        <Box4 drag dragSnapToOrigin variants={box4Variants} whileHover="hover" whileTap="click" />
      </BiggerBox>

      <Box3 style={{x, scale: transValue}} drag variants={box3Variants} whileHover="hover" whileTap="click" whileDrag="drag" />

      <Svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
          <motion.path
            variants={svg}
            initial={"start"}
            animate={"end"}
            transition={{ default: {duration: 5}, fill: {duration: 2, delay: 5}, }}
            // default는 모든 속성 적용 fill만 따로 적용하기 위해 사용
            fill="transparent" 
            d="M86.642 0L122 94.469H0l3.914-11.741L35.494 0h14.44l10.391 28.88L72.201 0h14.44zM49.934 83.942h20.783L66.803 74.9l-6.478-17.139-10.391 26.181zM43.32 9.312l-28.88 74.63h24.966l1.215-1.214 14.44-39.407-3.914-10.527-7.827-23.482zm62.89 74.63l-2.7-9.042-7.827-19.838-7.828-22.268L78.68 9.312 65.59 43.32l15.654 40.621h24.967z"
          >
          </motion.path>
      </Svg>

      <button onClick={toggleBtn}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box 
            variants={box5Variants} 
            initial="initial" 
            animate="visible" 
            exit="leaving" 
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
