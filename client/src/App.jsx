
import './App.css'
import {Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ApplyJobs from './Pages/ApplyJobs'
import Application from './Pages/Application'


function App() {


  return (
    <div>
      <Routes>
          <Route  path = '/' element={<Home/>} />
          <Route  path = '/apply-job/:id' element={<ApplyJobs/>} />
          <Route  path = '/application' element={<Application/>} />
          <Route  path = '/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
