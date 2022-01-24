import './App.css';
import {FaArrowCircleUp} from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import React, {useState} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Header from './Home/Header';
import AddRecipe from './Home/AddRecipe';

function App() {

  // The back-to-top button is hidden at the beginning
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  // This function will scroll the window to the top 
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)
  return (
      <div className="container">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/add" element={<AddRecipe/>}/>
          
        </Routes>
        </BrowserRouter>
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    </div>
  );
  }


export default App;