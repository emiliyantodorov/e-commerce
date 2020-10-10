import React from "react";
import {signInWithGoogle} from "../../firebase/firebase.utils";

import "./sign-in-page.scss"

import Section from "../../components/Section/Section";
import InputField from "../../components/input-field/InputField";
import CustomButton from "../../components/custom-button/CustomButton";

class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state.email)

        this.setState({email: "", password: ""});
    }

    handleChange = (evt) => {
        const {value, name} = evt.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in-page">
                <Section cName={"section-sign-in"}>
                    <h2 className="heading-secondary sign-in-page-heading">SIGN IN FORM</h2>
                    <form className="form form--sign-in" onSubmit={this.handleSubmit}>
                        <InputField
                            label={"email"}
                            id={"email"}
                            name={"email"}
                            type={"email"}
                            value={this.state.email}
                            handleChange={this.handleChange}
                            required
                        />
                        <InputField
                            id={"password"}
                            label={"password"}
                            name={"password"}
                            type={"password"}
                            value={this.state.password}
                            handleChange={this.handleChange}
                            required
                        />
                        <CustomButton
                            type={"submit"}
                            cName={"cta--sign-in"}
                        >
                            Sign in
                        </CustomButton>
                        <CustomButton
                            clickHandler={signInWithGoogle}
                            type={"button"}
                            cName={"cta--sign-in-with-google"}
                        >
                            Sign in with Google
                        </CustomButton>

                    </form>
                </Section>
            </div>
        )
    }
}

export default SignInPage;