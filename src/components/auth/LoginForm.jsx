import React, { useState } from 'react'
import { getCurrentUserInfo, login } from '../../api/login';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const path = useNavigate(null);
  
  const [userInfo, setUserInfo] = useState(null)

  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)

    const loginPayload = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    const loginRes = await login(loginPayload);
    if (loginRes.result === 'fail') return alert("Please enter your username or password.");
    
    const userInfo = await getCurrentUserInfo(loginRes.access_token);
    if (userInfo === null) return alert("Your information cannot be found.");

    setUserInfo(userInfo);
    alert(`Welcome, ‘${userInfo.name}’ 👋🏻`);
    path('/');
  }

  return (
    <article>
      <h2>Login</h2>
      <form id="form" onSubmit={loginSubmitHandler}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">PW</label>
          <input type="password" name="password" autoComplete="off" placeholder="Enter Password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </article>
  )
}

export default LoginForm