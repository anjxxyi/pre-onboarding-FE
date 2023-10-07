import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import SigninForm from './components/auth/SigninForm'
import ResultPage from './pages/ResultPage'

function App() {
  return (
    <div id="app">
      <Header />

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/*" element={<AuthPage />}>
              <Route path="signin" element={<SigninForm />} />
          </Route>
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Layout>

      <Footer />
    </div>
  )
}

export default App