import React from "react"
import { BASE_URL } from "./const"
import { getAccessTokenFromLocalStorage, saveAccessTokenToLocalStorage } from "../utils/accessTokenHandler";

export const login = async (args) => {
  const loginRes = await fetch(`${ BASE_URL }/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(args)
  })
  console.log(loginRes);

  if (loginRes.ok) {
    const loginResData = await loginRes.json();
    saveAccessTokenToLocalStorage(loginResData.access_token)
    return {result: 'success'}
  }

  return {result: 'fail'}
}

export const getCurrentUserInfo = async () => {
  const userInfoRes = await fetch(`${ BASE_URL }/auth/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ getAccessTokenFromLocalStorage() }`
    }
  })

  if (userInfoRes.ok) return userInfoRes.json()

  return null
}