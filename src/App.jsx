
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'

import Home from './Home'
import Jordan1 from './Jordan1'
import Find from './Find'
import Help from './Help'
import Join from './Join'
import Sign from './Sign'
import Right from './Right'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Jordan1' element={<Jordan1 />} />
        <Route path='/Right' element={<Right />} />
        <Route path='/Find' element={<Find />} />
        <Route path='/Help' element={<Help />} />
        <Route path='/Join' element={<Join />} />
        <Route path='/Sign' element={<Sign />} />
      </Routes>
    </div>
  )
}

export default App
