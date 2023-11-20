import React from "react";
import { Link } from "react-router-dom";

import './index.css'

export default function SignIn() {

    return (
        <>
            <div class="container">
                <div class="card">
                    <div class="card-image">
                        <div className="overlay"></div>
                        <h2 class="card-heading">
                            Already Got started-
                            <small>Let us dive into your account</small>
                        </h2>
                    </div>

                    <form class="card-form">
                        <div class="input">
                            <input type="text" class="form-element" placeholder="Email" autoFocus />
                        </div>
                        <div class="input">
                            <input type="password" class="form-element" placeholder="Password" />
                        </div>
                        <div class="action">
                            <button class="action-button">Sign In</button>
                        </div>
                    </form>

                    <p className="text-muted">New here? <Link to="/">Go to SignUp</Link></p>

                    <div class="card-info">
                        <p>Forgot your Password ? <a href="#terms">Reset Password</a></p>
                    </div>
                </div>
            </div>

        </>
    )
}