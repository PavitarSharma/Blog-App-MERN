import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import CreateBlog from "./pages/CreateBlog"
import Blog from "./pages/Blog"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/blog/:id" element={<Blog />} />
      <Route exact path="/blog" element={<CreateBlog />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signUp" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App