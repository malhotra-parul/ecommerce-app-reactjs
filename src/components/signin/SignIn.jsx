import React, { Component } from "react";
import "./SignIn.styles.scss";
import FormInput from "./../form-input/FormInput";
import CustomButton from "../../components/custom button/Button";

class SignIn extends Component {
    state = { 
        email: "",
        password: ""
     }
     handleSubmit = (event)=>{
         event.preventDefault();
         
         this.setState({
             email: "",
             password:""
         })
     };

     handleChange = (event)=>{
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
     };

    render() { 
        return ( 
            <div className="sign-in">
                <h2 className="title">I already have an account!</h2>
                <span>Sign in with your email and password</span>   
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email"
                           value={this.state.email}
                           onChange={this.handleChange}
                           name="email"
                           label="Email" 
                           required/>
    
                    <FormInput type="password"
                           value={this.state.password}
                           onChange={this.handleChange}
                           name="password"
                           label="Password" 
                           required/>  
   
                    <CustomButton type="submit">Sign In</CustomButton>        
                </form>        
            </div>
         );
    }
}
 
export default SignIn;