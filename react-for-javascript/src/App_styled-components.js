import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
// styled-components를 사용할 시 백틱``을 사용해야하며 밑에서 보는바와 같이 div 대신 사용할 수 있다.
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`; // styled() 괄호안에 기존의 값을 넣어서 확장을 할 수 있게된다.
// styled-components 에서는 style={{ width:100, height:100 }} 과 달리 ``백틱안에 css로 표현해주어야한다.
// background-color에서 props를 사용했는데 이부분은 매번 동일한 조건에서 색 하나만 바꿀 수 있게 하도록 사용한 것이다.
const Text = styled.span`
  color: white;
`;

function App() {
  return (
    // <div style={{ display: "flex" }}>
    <Father>
      <Box bgColor="teal" >
        <Text>Hi!</Text>
      </Box>
      <Circle bgColor="tomato"/>
    </Father>
    // </div>
  );
}

export default App;