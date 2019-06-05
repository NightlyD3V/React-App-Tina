import React, { Component } from "react";
import "./App.css";
import { NavLink, Switch, Route, withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="top-nav">
          <div className="reg-login">
          <NavLink className="top-nav-tab sign-in reg" to="/register">
            Register
          </NavLink>
            <NavLink className="top-nav-tab sign-in" to="/login">
              Login
            </NavLink>
          </div>
          <div className="logo">
          {/* <NavLink to="/content">
            <img src={logo} alt={logo} />
          </NavLink> */}
        </div>
          <NavLink className="top-nav-tab main" to="/content">
            Home
          </NavLink>
          <NavLink className="top-nav-tab main" to="/profile">
            My Profile
          </NavLink>
          <NavLink
              className="top-nav-tab main"
              to="/login"
              onClick={() => localStorage.removeItem("token")}
            >
              Log Out
            </NavLink>
        </nav>
        

        <section>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {/* <Route path="/profile" render={props => <Profile {...props} />} /> */}
            {/* <Route path="/content" component={Content} /> */}
            <Route exact path="/" render={() => <Redirect to="/content" />} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default withRouter(App);