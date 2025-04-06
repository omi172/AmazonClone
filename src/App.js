import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import react from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout.js';
import Login from './Login.js';

function App() {
  return (
    
       <div className="App">
        <Router>
          <Routes>
              <Route path="/login" element={<Login />}>
              
              </Route>
            <Route path="/checkout" element={<Checkout />}>
              
            </Route>
            <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          </Routes>
        </Router>  
       </div>
   
  );
}

export default App;
