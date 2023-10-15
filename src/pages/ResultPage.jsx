import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/const';

const ResultPage = () => {
  const [usersInfo, serUsersInfo] = useState([]);
  useEffect(() => {
    axios.get(
      `${ BASE_URL }/users`)
      .then(res => serUsersInfo(res.data)
      )
  }, []);

  return (
    <section className="page-result">
      <h2>Data Result</h2>
      <ul>
        {usersInfo.map((value, index) => {
          if (index > 3) return;
          return (
            <li key={index}>
              <span>Name : {value.name}</span>
              <span>Email : {value.email}</span>
              <span>Password : {value.password}</span>
              <span>Role : {value.role}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ResultPage