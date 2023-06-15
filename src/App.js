import { Fragment } from "react";
import "swiper/css";
import MovieLayout from "./component/movie/MovieLayout.component";
import Navigation from "./component/navigation/Navigation.component";
import Banner from "./component/banner/Banner.component";
function App() {
  return (
    <Fragment>
      <Navigation></Navigation>
      <Banner></Banner>
      <Fragment>
        <MovieLayout type="now_playing"></MovieLayout>
        <MovieLayout type="popular"></MovieLayout>
        <MovieLayout type="top_rated"></MovieLayout>
      </Fragment>
    </Fragment>
  );
}

export default App;
