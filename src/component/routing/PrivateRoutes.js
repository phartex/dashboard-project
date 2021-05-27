import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dashboard from "../../component/pages/Dashboard";
import NewApplication from "../../component/pages/NewApplication";

const PrivateRoutes = ({ auth: { isAuthenticated } }) => {
  return <Route path="/" component={Dashboard} />;
};

PrivateRoutes.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = function(state) {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(PrivateRoutes);
