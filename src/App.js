import { Fragment } from "react";
import "swiper/css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./component/navigation/Navigation.component"
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation></Navigation>}></Route>
      </Routes >
    </Fragment >
  );
}

export default App;
