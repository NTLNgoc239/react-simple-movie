import { Fragment } from "react";
import "swiper/css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.component";
import Movie from "./pages/Movie.component";
import Main from "./pages/Main.component";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movie></Movie>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
