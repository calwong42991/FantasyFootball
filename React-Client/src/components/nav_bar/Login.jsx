import React from 'react';

const Login = () => {
  return (
    <div>
      <form action= "/login" method= "POST" > 
        <h2>Log In</h2>
        <label htmlFor="logInUserName">Username: </label> 
        <br />
          <input
            id="logInUserName"
            name="username"
            required
            placeholder= "Enter Username" 
          /> 
        <br />
        <label htmlFor="logInPassword">Password: </label> 
        <br />
          <input
            id="logInPassword"
            name="password"
            required
            placeholder= "Enter Password"
          />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login;
