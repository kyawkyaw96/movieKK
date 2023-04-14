import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RoutePage from './pages/RoutePage'
import Details from './pages/Details'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RoutePage/>}/>
        <Route path='/details/:id/:type' element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App
