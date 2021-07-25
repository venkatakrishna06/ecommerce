import './SignIn.scss';
import React, {Component} from 'react';
import CustomButton from "../custom-button/button";
import FormInput from "../Form-input/Form-input";
import {signInWithGoogle} from "../../firebase/firebase-utils";

class SignIn extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    };
    handleChange = (e) => {
        const {value,name}=e.target;

        this.setState({[name]:value});
    };


    render() {
        return (
            <div className='sign-in'>

                <h2>I already hav   e an account</h2>
                <span> Sign in with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='email'
                        name='email'
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required/>

                    <FormInput
                        label='Password'
                        handleChange={this.handleChange}
                        type="password"
                        name='password'
                        value={this.state.password}
                           required/>
                    <div className='buttons'> <CustomButton type='submit' >SIGN IN</CustomButton>

                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
                    </div></form>


            </div>
        );




    }
}

export default SignIn;
