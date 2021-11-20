import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserProvider } from '../../../secure/Components/Context/UserContext';
import './Login.css'

function Login() {

  const [name, setName] = useState({ username: '', password: '' })
  const navigate = useNavigate();
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    setError(false)
    event.preventDefault();
    const data = new FormData(event.target);
    let uname = data.get("username");
    let pwd = data.get("password");

    console.log(data)
    // redirecting to dash board
    if (uname == 'sudha' && pwd == 'sudha') {
      // setting the user id in the context
      window.name = uname
      // navigate to the next window
      navigate("/dashboard/home")
    } else {
      setError(true)
    }
  }

  return (
    <div className="loginGrid">
      <div id="loginBox1">Sample Text Goes Here</div>
      <div id="loginBox">
        <form className="login" onSubmit={handleSubmit} method="post">

          <div id="headerBox"> Login Here</div>
          <div>
            <label>User Name </label>
            <input type="text" name="username" id="username" onChange={e => setName({ ...name, username: e.target.value })} />
          </div>
          <div>
            <label>Password </label>
            <input type="password" name="password" id="password" onChange={e => setName({ ...name, password: e.target.value })} /></div>

          <div className="actions" id="submitBox">
            <input type="submit" name="login" value="Login" /> <br />
            <a href="/forgot" >I forgot my password</a>
          </div>
          {
            error ?
              <div><label style={{ color: "red" }}>Invalid Credentials!</label></div>
              :
              ''
          }
        </form>
        <form>

        </form>
      </div >
      <div id="loginBox2"> </div>
    </div >
  )
}

export default Login
