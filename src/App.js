import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {ToastContainer} from "react-toastify";
import Nav from "./components/nav";
import Home from "./pages/home";
import {useSelector} from "react-redux";

function App() {

    const  state = useSelector((state)=>state);
    console.log(state)
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
