import React, { useCallback, useEffect, useRef, useState } from 'react'
import { getCurrentUserInfo } from '../api/login'

const HomePage = () => {
  const [userInfo, setUserInfo] = useState(null)
  const isDataFetched = useRef(false)

  const getUserInfo = useCallback (async () => {
    const userInfo = await getCurrentUserInfo();

    if (userInfo === null) return;
    setUserInfo(userInfo);

    isDataFetched.current = true
  }, [])

  useEffect(() => {
    if (isDataFetched.current) return
    getUserInfo()
  }, [])

  return (
    <section className="page-main">
      <p>{userInfo ? `user name : ${userInfo.name}` : `Please sign in ;(`}</p>
    </section>
  )
}

export default HomePage