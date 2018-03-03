import React from 'react';

const Signup = () => {
  return (
    <div>
      <form action= "/signup" method= "POST" > 
        <h2>Signup</h2>
        <label htmlFor="signUpEmail">Email: </label> 
        <br />
          <input
            id="signUpEmail"
            name="Email"
            required
            placeholder= "Enter Email" 
          /> 
        <br />
        <label htmlFor="signUpUserName">Username: </label> 
        <br />
          <input
            id="signUpUserName"
            name="username"
            required
            placeholder= "Enter Username" 
          /> 
        <br />
        <label htmlFor="signUpPassword">Password: </label> 
        <br />
          <input
            id="signUpPassword"
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

export default Signup;