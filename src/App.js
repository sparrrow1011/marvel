import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ToastContainer} from "react-toastify";
import Nav from "./components/nav";
import Home from "./pages/home";

function App() {
  return (
      <>
        <Router>
          <div className=''>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </>
  );
}

export default App;
