import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Adventure from './Components/Adventure';
import AllPathDetails from './Components/AllPathDetails';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navi from './Components/Navi';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Navi />
        <Adventure/>
        <AllPathDetails/>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
