import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tv" element={<Tv />}>
          <Route path="/tv/:tvId" element={<Tv />}></Route>
        </Route>
        <Route path="/search" element={<Search />}>
          <Route path="movies/:movieId" element={<Search />}></Route>
          <Route path="tv/:tvId" element={<Search />}></Route>
        </Route>
        <Route path="/" element={<Home />}>
          <Route path="movies/:movieId" element={<Home/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
