import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => { console.log("CALL THE API!"); }, []); // useEffect는 무조건 한번만 출력
  useEffect(() => { 
    if(keyword !== "" && keyword.length > 5) { // if문으로 비어있거나 키 길이가 5 미만일때는 render 시키지않게 적용할 수도 있다.
      console.log("Searching..", keyword);
      }
    }, [keyword]); 
  // console.log가 밖에 있었다면 click할 때도 Searching이 작동하기 때문에 useEffect를 적용해 검색할때만 render되게함.
  useEffect(() => { console.log("I run when your click"); }, [counter]);
  // useState는 rerender를 해주므로 console.log도 counter가 작동할때마다 출력됨
  useEffect(() => { console.log("I run when your click & Search"); }, [counter, keyword]);
  return (
    <div>
      <input value = {keyword} onChange= {onChange} placeholder = "Search now!" type = "text" />
      <h1>{counter}</h1>
      <button onClick = {onClick}>click here</button>
    </div>
  );
}

export default App;
