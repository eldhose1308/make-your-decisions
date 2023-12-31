import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GoogleLogin } from '@react-oauth/google';
import { Button, TextBox } from '_components/Form'; 

import useValidationMsg from "_hooks/useValidationMsg";

import { signupUser } from "./_actions";
import { isAValidEmail, isNotAValidPassword } from "_utils/Validations";

import { useTopLoader } from "_contexts/TopLoaderProvider";

import './index.css'

const initialValidationObj = {
    email: {},
    password: {},
}

export default function SignUp() {

    const [ showTopLoader, hideTopLoader ] = useTopLoader();

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
        const payload = { email, password }
        
        if(!isValidForm(payload)) throw new Error('Form not Validated');

        showTopLoader()
        await signupUser(payload)
        .then(res => console.log('Success'))
        .catch(err => {
            const { message, status } = err;
            setValidationObjError(message, 'serverResponse')
            throw err
        })
        .finally(() => {
            hideTopLoader()
        })
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="login-card">
                    <div className="login-card-image">
                        <div className="overlay"></div>
                        <h2 className="login-card-heading">
                            Get started-
                            <small>Let us create your account</small>
                        </h2>
                    </div>
                    <form className="login-card-form">

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
                            <GoogleLogin 
                                text="signup_with" 
                                onSuccess={(credentialResponse) => { console.log(credentialResponse) }} 
                                onError={() => { alert('Error') }} 
                            />
                        </div>

                    </form>


                    <div className="login-card-info">
                      <Link to="/signin">Go to SignIn</Link> /  
                       <Link to="#terms">Reset Password</Link>
                    </div>
                    <Link to="/home"><Button customClass="outline" text="Continue as Guest" />
                    </Link>
                </div>
            </div>

        </React.Fragment>
    )
}
