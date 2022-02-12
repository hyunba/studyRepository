import styled, {  keyframes  } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
  justify-content:center;
  align-items:center;
`;
const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius:0px;
  }
`;
const Hi = styled.span`
    font-size:26px;
    color: ${(props) => props.theme.textColor};
    
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${(props) => props.bgColor};
  animation: ${rotationAnimation} 1s linear infinite;
  display:flex;
  justify-content:center;
  align-items:center;
  ${Hi} {
    &:hover{
      font-size:66px;
    }
    &:active{
      opacity: 0;
    }
  }
`; // 모든 것을 styled-component로 표현 안해도된다. span과 같이 Box안에도 넣기 가능하다
// &:hover에서 &는 span 자신을 의미

function App() {
  return (
    // <div style={{ display: "flex" }}>
    <Wrapper>
      <Box bgColor="teal">
        <Hi>Hi</Hi>
      </Box>
    </Wrapper>
    // </div>
  );
}

export default App;