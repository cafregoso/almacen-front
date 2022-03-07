import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';


import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Layout /> } className='App' >
          <Route index element={ <Home /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
