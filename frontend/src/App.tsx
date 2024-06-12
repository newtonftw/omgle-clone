import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Landing } from './components/Landing'

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" componet={<Landing />} />
        <Route path="/" componet={<Landing />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
