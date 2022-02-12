import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";


const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor}
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleDark = () => setIsDark((current) => !current)
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme }>
      <button onClick={toggleDark}>toggle</button>
      <Container><H1>hi</H1></Container>
    </ThemeProvider>
  );
}

export default App;
