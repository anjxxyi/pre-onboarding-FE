import React, { useState } from 'react'

const users = [
  {
    username: 'blue',
    password: '1234',
    userInfo: { name: 'blueStragglr' }
  },
  {
    username: 'white',
    password: '1234',
    userInfo: { name: 'whiteDwarf' }
  },
  {
    username: 'red',
    password: '1234',
    userInfo: { name: 'redGiant' }
  }
]

const _secret = '1234qwer!@#$';

const signin = async (username, password) => {

  const user = users.find((user) => {
    return user.username === username && user.password === password;
  })

  return user ? {
      messege: 'SUCCESS',
      token: JSON.stringify({user: user.userInfo, secret: _secret})
    } : null;
}


const getUserInfo = async (token) => {
  const parsedToken = JSON.parse(token);
  if (!parsedToken?.secret || parsedToken.secret !== _secret) return null;

  const signinUser = users.find((user) => {
    if (user.userInfo.name === parsedToken.user.name) return user;
  });

  return signinUser ? signinUser.userInfo : null;
}

const SigninForm = () => {
  const [userInfo, setUserInfo] = useState(null);

  const signinSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const signinRes = await signin(formData.get('username'), formData.get('password'));
    if (!signinRes) return alert("Please enter your username or password.");

    const userInfo = await getUserInfo(signinRes.token);
    if (!userInfo) return alert("Your information cannot be found.");

    setUserInfo(userInfo);
    alert(`Welcome, ‘${userInfo.name}’ 👋🏻`);
  }

  return (
    <article>
      <h2>Sign in</h2>
      <form id="form" onSubmit={signinSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username">ID</label>
          <input type="text" name="username" placeholder="Enter ID" />
        </div>
        <div className="form-group">
          <label htmlFor="password">PW</label>
          <input type="password" name="password" autoComplete="off" placeholder="Enter PW" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <br />
      <p>{userInfo ? `user name : ${userInfo.name}` : `Please sign in ;(`}</p>
    </article>
  )
}

export default SigninForm