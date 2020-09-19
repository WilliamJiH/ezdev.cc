import React from 'react';
import './SignIn.css'

const SignIn = (props) => {
  const { email, setEmail, password, setPassword, handleLogin,
    handleSignUp, hasAccount, setHasAccount, emailError, passwordError } = props;

  return (
    <div className="base-container">
      <h2>CMS Sign In</h2>
      <form>
        <div className="inputField">
          <input
            type="=text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <label>Email</label>
          <p className="errorMsg">{emailError}</p>
        </div>
        <div className="inputField">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
          <p className="errorMsg">{passwordError}</p>
        </div>
        <div className="signInButton">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
            </>
          ) : (
              <>
                <button onClick={handleSignUp}>Sign Up</button>
                <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
              </>
            )}
          <button onClick={handleLogin}>Sign In</button>
        </div>
        {/* <div className="signInButton">
                    <button>Sign In With Github</button>
                </div> */}
      </form>
    </div>
  );
}

export default SignIn;