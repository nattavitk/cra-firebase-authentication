import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import SignInComponent from "./SignInComponent";

const SignInPage = () => (
    <div>
        <SignInForm />
    </div>
);

const INITIAL_STATE = {
    email: "",
    password: "",
    error: null
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === "" || email === "";

        return (
            <SignInComponent
                email={email}
                password={password}
                isInvalid={isInvalid}
                error={error}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
            />
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
