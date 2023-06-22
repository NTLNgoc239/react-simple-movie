import { Fragment, lazy, Suspense } from "react";
import "swiper/css";
import { Route, Routes } from "react-router-dom";
import Main from "pages/Main.component";
import NotFound from "component/404_page/NotFound.component";
// import Home from "pages/Home.component";
// import Movie from "pages/Movie.component";
// import MovieDetail from "pages/MovieDetail.component";

const Home = lazy(() => import("pages/Home.component"));
const Movie = lazy(() => import("pages/Movie.component"));
const MovieDetail = lazy(() => import("pages/MovieDetail.component"));
function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/movies" element={<Movie></Movie>}></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetail></MovieDetail>}
            ></Route>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
