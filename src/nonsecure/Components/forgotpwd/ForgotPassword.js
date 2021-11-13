import React from 'react'
import './ForgotPassword.css'

function ForgotPassword() {
    return (
        <div className="forgotGrid">
          <div id="forgotBox">
            <form className="forgot" action="" method="post">
    
              <div id="forgotheaderBox"> Forgot Password</div>
              <div>
                <label>User ID </label>
                <input type="text" name="username" id="username" />
              </div>
              <div>
                <label>User E-Mail </label>
                <input type="email" name="email" id="email" /></div>
    
              <div className="forgotactions" id="submitBox">
                <input type="submit" name="login" value="Send My Password" /> <br />
              </div>
            </form>
            <form>
    
            </form>
          </div >
        </div >
      )
}

export default ForgotPassword
