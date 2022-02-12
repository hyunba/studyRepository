import { useRecoilValue, useSetRecoilState } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atoms";
import { darkTheme, lightTheme } from "./theme";


const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor}
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const toggleDark = useSetRecoilState(isDarkAtom);
  const toggleBtn = () => toggleDark(() => !isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme }>
      <button onClick={toggleBtn}>toggle</button>
      <Container><H1>hi</H1></Container>
    </ThemeProvider>
  );
}

export default App;
