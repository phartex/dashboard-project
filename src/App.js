import React from "react";
import { link } from "react-router";
import "./Dash.css";
import Dashboard from "./component/pages/Dashboard";
import Portal from "./component/pages/Portal";
import NewApplication from "./component/pages/NewApplication";
import AdminDashboard from "./component/pages/admin/AdminDashboard";
import Header from "./component/layout/Header";
import {
  BrowserHistory,
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "./component/pages/SignUp";
import Vacancy from "./Vacancy"
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
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/new-application" component={NewApplication}></Route>
          <Route path="/admin-dashboard" component={AdminDashboard}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
