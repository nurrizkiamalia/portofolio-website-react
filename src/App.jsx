import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Profile from "./routes/Profile"
import Contact from './routes/Contact'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Profile/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
  )
}

export default App
