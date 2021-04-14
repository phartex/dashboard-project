import React from "react";
import { link } from "react-router";
import "./Dash.css";
import Vacancy from "./Vacancy";
import Portal from "./Portal";
import NewApplication from "./component/pages/NewApplication";
import Header from "./component/layout/Header";
import {
  BrowserHistory,
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "./SignUp";
// import image from './image.png'

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Portal/> */}
        <Switch>
          <Route path="/" exact component={Portal}></Route>
          <Route path="/SignUp" component={SignUp}></Route>
          <Route path="/Vacancy" component={Vacancy}></Route>
          <Route path="/new-application" component={NewApplication}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
