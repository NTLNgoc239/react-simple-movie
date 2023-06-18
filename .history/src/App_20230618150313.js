import { Fragment } from "react";
import "swiper/css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./component/navigation/Navigation.component";
import Home from "./pages/Home.component";
import Movie from "./pages/Movie.component";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Navigation></Navigation>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movie" element={<Movie></Movie>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
