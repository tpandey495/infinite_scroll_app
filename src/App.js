import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Page from './Page';

const  App=()=> {
return (
    <>
    <BrowserRouter>
  <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/home"  element={<Page />} />
   </Routes>
  </BrowserRouter>
  </>
);
};

export default App;
