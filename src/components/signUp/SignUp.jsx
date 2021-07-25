import React from "react";
import FormInput from "../Form-input/Form-input";
import "./SignUp.scss";
import CustomButton from "../custom-button/button";
import {auth,createUSerProfileDocument} from "../../firebase/firebase-utils";

import {Component} from 'react';

class SignUp extends Component {
    constructor() {
        super();
        this.state={
            displayName:'',
            email:"",
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit= async event=>{
        const {displayName,email,password,confirmPassword}=this.state
        event.preventDefault();
        if(password !== confirmPassword){
            prompt('passwords dont match');
            return;
        }
try{
            const {user}= await auth.createUserWithEmailAndPassword(this.state.email,this.state.password);
            await createUSerProfileDocument(user,{displayName})
this.setState({
    displayName:'',
    email:"",
    password:'',
    confirmPassword:''
})

        }
        catch (error){
console.log(error);
        }
    }


handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
}
    render() {
        const {displayName,email,password,confirmPassword}=this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with Email and Password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                   />
                    <FormInput
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='text'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='text'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit' >SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;