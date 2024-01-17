import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Views/Home'
import Sorts from './Views/Sorts'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sort/:id" element={<Sorts />} />
      {/* <Route path="/product/:category/:name" element={<Product />} />
      <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
