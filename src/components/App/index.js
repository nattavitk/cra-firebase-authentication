import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../UserManagement/SignUp";
import SignInPage from "../UserManagement/SignIn";
import PasswordForgetPage from "../UserManagement/PasswordForget";
import HomePage from "../Home";
import AccountPage from "../UserManagement/Account";
import AdminPage from "../UserManagement/Admin";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../UserManagement/Session";

const App = () => (
    <Router>
        <div>
            <Navigation />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
            />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
    </Router>
);

export default withAuthentication(App);
