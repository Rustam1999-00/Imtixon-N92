import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../../components/Register/Register'
import Login from '../../components/Login/Login'
import Header from '../../components/Header/Header'
const Public = () => {
  return (
    <div>
    <Header/>
      <Routes>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default Public
