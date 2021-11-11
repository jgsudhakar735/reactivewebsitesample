import React from 'react'
import './Login.css'
import UserIcon from '@material-ui/icons/SupervisedUserCircleRounded'
import PwdIcon from '@material-ui/icons/VpnKey'

function Login() {
  return (
    <div className="loginGrid">
      <div id="loginBox1"></div>
      <div id="loginBox">
        <form className="login" action="" method="post">

          <div id="headerBox"> Login Here</div>
          <div>
            <label>User Name </label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label>Password </label>
            <input type="password" name="password" id="password" /></div>

          <div className="actions" id="submitBox">
            <input type="submit" name="login" value="Login" /> <br />
            <a href="/forgot" >I forgot my password</a>
          </div>
        </form>
        <form>

        </form>
      </div >
      <div id="loginBox2"> </div>
    </div >
  )
}

export default Login
