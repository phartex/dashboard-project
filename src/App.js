import React, { useEffect } from "react";
import "./Dash.css";
import Dashboard from "./component/pages/Dashboard";
import Portal from "./component/pages/Portal";
import NewApplication from "./component/pages/NewApplication";
import AdminDashboard from "./component/pages/admin/AdminDashboard";
import ViewApplications from "./component/pages/admin/ViewApplications";
import ViewDetails from "./component/pages/admin/ViewDetails";
import NewPosition from "./component/pages/admin/NewPosition";
import JobPositions from "./component/pages/admin/JobPositions";
import { Provider } from "react-redux";
import store from "./store";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./component/pages/SignUp";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoutes from "./component/routing/PrivateRoutes";
import { loadUser } from "./actions/authentication";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ auth: { isAuthenticated }, loadUser }) => {
  useEffect(() => {
    loadUser();
    console.log(isAuthenticated);
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <BrowserRouter>
        {/* <Portal/> */}
        <Switch>
          <Route path="/dashboard" component={PrivateRoutes} />

          <Route path="/" exact component={Portal}></Route>
          <Route path="/SignUp" component={SignUp}></Route>

          {/* <PrivateRoutes
              path="/dashboard"
              component={Dashboard}
            ></PrivateRoutes> */}
          <Route path="/new-application" component={NewApplication}></Route>
          <Route path="/admin-dashboard" component={AdminDashboard}></Route>
          <Route path="/view-applications" component={ViewApplications}></Route>
          <Route path="/view-details" component={ViewDetails}></Route>
          <Route path="/new-position" component={NewPosition}></Route>
          <Route path="/job-positions" component={JobPositions}></Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

PrivateRoutes.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = function(state) {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { loadUser })(App);
