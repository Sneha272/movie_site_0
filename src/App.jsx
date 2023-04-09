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
import MovieDetetails from './pages/MovieDetetails';


function App() {
  

  return (
    <Router>
      <Routes>  
        <Route exact path='/' element={< Home />}></Route>  
        <Route exact path='/about/:id' element={< MovieDetetails />}></Route>  
        {/* <Route exact path='/contact' element={< Contact />}></Route>   */}
      </Routes>
    </Router>
  )
}

export default App
