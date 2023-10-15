import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import LoginForm from './components/auth/LoginForm'
import ResultPage from './pages/ResultPage'

function App() {
  return (
    <div id="app">
      <Header />

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/*" element={<AuthPage />}>
              <Route path="login" element={<LoginForm />} />
          </Route>
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Layout>

      <Footer />
    </div>
  )
}

export default App
