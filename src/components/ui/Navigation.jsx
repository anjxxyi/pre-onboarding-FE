import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const pathName = useLocation();
  console.log(pathName);
  return (
    <nav>
      <ul>
        <li><Link to={`/auth/login`}>Page : JWT Login</Link></li>
        <li><Link to={`/result`}>Page : Users</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation