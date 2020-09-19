import React, { Component } from 'react';
import './SignIn.css'

class SignIn extends Component {
    render() {
        return (
            <div className="base-container">
                <h2>CMS Sign In</h2>
                <form>
                    <div className="inputField">
                        <input type="name" required=" " name=" " />
                        <label>Username</label>
                    </div>
                    <div className="inputField">
                        <input type="password" required=" " name=" " />
                        <label>Password</label>
                    </div>
                    <div className="signInButton">
                        <button type="submit">Sign In</button>
                    </div>
                    <div className="signInButton">
                        <button type="submit">Sign In With Github</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;