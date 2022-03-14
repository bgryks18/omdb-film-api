import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './style/style.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Movie from './components/Movie'
import PageNotFound from './components/PageNotFound'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
