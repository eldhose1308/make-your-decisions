import React from "react";
import { Link } from "react-router-dom";

import './index.css'

export default function SignIn() {

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-image">
                        <div className="overlay"></div>
                        <h2 className="card-heading">
                            Already Got started-
                            <small>Let us dive into your account</small>
                        </h2>
                    </div>

                    <form className="card-form">
                        <div className="input">
                            <input type="text" className="form-element" placeholder="Email" autoFocus />
                        </div>
                        <div className="input">
                            <input type="password" className="form-element" placeholder="Password" />
                        </div>
                        <div className="action">
                            <button className="action-button">Sign In</button>
                        </div>
                    </form>

                    <p className="text-muted">New here? <Link to="/">Go to SignUp</Link></p>

                    <div className="card-info">
                        <p>Forgot your Password ? <a href="#terms">Reset Password</a></p>
                    </div>
                </div>
            </div>

        </>
    )
}