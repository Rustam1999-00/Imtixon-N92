import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Home from '../../components/Home/Home'
import NodeFond from '../../components/NodeFond/NodeFond'
import Maxsulotlar from '../../components/Maxsulotlar/Maxsulotlar'
import Shopping from '../../components/Shopping/Shopping'
import Loves from '../../components/Loves/Loves'
import {Footer} from '../../components/Footer/Footer'

const Privet = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Header' element={<Header />} />
        <Route path='/Footer' element={<Footer/>} />
        <Route path='/Maxsulotlar' element={<Maxsulotlar />} />
        <Route path='/Shopping' element={<Shopping />} />
        <Route path='/Loves' element={<Loves/>} />
        <Route path='/*' element={<NodeFond />} />
      </Routes>

    </div>
  )
}

export default Privet
