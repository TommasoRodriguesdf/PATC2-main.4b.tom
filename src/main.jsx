import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Router, BrowserRouter } from "react-router-dom"
import Todo from 'Todo.jsx'
import Home from './Home/Home.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path= '/home' element= {<Home />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
