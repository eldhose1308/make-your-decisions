import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GoogleLogin } from '@react-oauth/google';
import { Button, TextBox } from '_components/Form'; 
import { Alerts } from '_components/UI';

import TopLoader  from '_components/UI/TopLoader/TopLoader'

import useValidationMsg from "_hooks/useValidationMsg";

import { signupUser } from "./_actions";
import { isAValidEmail, isNotAValidPassword } from "_utils/Validations";


import './index.css'

const initialValidationObj = {
    email: {},
    password: {},
}

export default function SignUp() {

    const [ isLoading, setIsLoading ] = useState(false);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { validationObj, setValidationObjError, setValidationObjInfo } = useValidationMsg(initialValidationObj);

    const handleEmailChange = (value, id) => {        
        const info = isAValidEmail(value, id);
        setValidationObjInfo(info, id)
        setEmail(value);
    }

    const handlePasswordChange = (value, id) => {
        const info = isNotAValidPassword(value, id);
        setValidationObjInfo(info, id)
        setPassword(value);
    }

    const isValidForm = (payload) => {
        const { email, password } = payload;
        let emailError = isAValidEmail(email, 'email');
        emailError = email.length === 0 ? 'Email field should not be empty' : emailError;

        let passwordError = isNotAValidPassword(password, 'password');
        passwordError = (password.length < 8 || password.length > 16) ? 'Password should be minimum of 8 and maximum 16 characters' : passwordError;
        passwordError = password.length === 0 ? 'Password field should not be empty' : passwordError;

        setValidationObjError(emailError, 'email')
        setValidationObjError(passwordError, 'password')

        return !emailError && !passwordError.length;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const payload = { email, password }
        
        if(!isValidForm(payload)) throw new Error('Form not Validated');

        await signupUser(payload)
        .then(res => alert('Success'))
        .catch(err => {
            const { message, status } = err;
            setValidationObjError(message, 'serverResponse')
            throw err
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <React.Fragment>
            {isLoading ? (<TopLoader />) : null}
            <div className="container">
                <div className="card">
                    <div className="card-image">
                        <div className="overlay"></div>
                        <h2 className="card-heading">
                            Get started-
                            <small>Let us create your account</small>
                        </h2>
                    </div>
                    <form className="card-form">

                        {validationObj.serverResponse ? (<Alerts value={validationObj.serverResponse} />) : null}

                        <TextBox 
                            labelName="Email"  
                            id="email" 
                            value={email} 
                            onChange={handleEmailChange} 
                            validationMessage={validationObj.email} 
                        />
                        <TextBox 
                            inputType="password" 
                            labelName="Password" 
                            id="password" 
                            value={password} 
                            onChange={handlePasswordChange} 
                            validationMessage={validationObj.password} 
                        />
    
                        <Button text="Sign Up" onAsyncClick={handleSubmit} />
                        
                        <div className="highlight-line"><span>or</span></div>

                        <div className="d-flex-center">
                            <GoogleLogin text="signup_with" onSuccess={() => {}} onError={() => {}} />
                        </div>

                    </form>


                    <div className="card-info">
                      <Link to="/signin">Go to SignIn</Link> /  
                       <Link to="#terms">Reset Password</Link>
                    </div>
                    <Button customClass="outline" text="Continue as Guest" onClick={() => {alert('Hello Guest')}} />

                </div>
            </div>

        </React.Fragment>
    )
}
