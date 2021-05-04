import React from "react";
import { link } from "react-router";
import "./Dash.css";
import Dashboard from "./component/pages/Dashboard";
import Portal from "./component/pages/Portal";
import NewApplication from "./component/pages/NewApplication";
import AdminDashboard from "./component/pages/admin/AdminDashboard";
import ViewApplications from "./component/pages/admin/ViewApplications";
import ViewDetails from "./component/pages/admin/ViewDetails";
import Header from "./component/layout/Header";
import {
  BrowserHistory,
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "./component/pages/SignUp";
import Vacancy from "./Vacancy";
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
          <Route path="/view-applications" component={ViewApplications}></Route>
          <Route path="/view-details" component={ViewDetails}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
