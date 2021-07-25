import './Sign-in-up.scss';
import React, {Component} from 'react';
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

const SignInUp=()=>(
    <div className='sign-in-sign-up'>  <SignIn/>
<SignUp/>
    </div>

);
export default SignInUp;