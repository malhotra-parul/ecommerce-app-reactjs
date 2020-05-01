import React from "react";
import "../../components/signin/SignIn";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/signup";
import "./signinsignup.styles.scss";

const SignInSignUpPage = () => {
    return (
        <div className="signin-signup">
            <SignIn />
            <SignUp />
        </div>
      );
}
 
export default SignInSignUpPage;