import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';


function App() {
  

  return (
    <Router>
      <Routes>  
        <Route exact path='/' element={< Home />}></Route>  
        <Route exact path='/about/:id' element={< MovieDetails />}></Route>  
        {/* <Route exact path='/contact' element={< Contact />}></Route>   */}
      </Routes>
    </Router>
  )
}

export default App
