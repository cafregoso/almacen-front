import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';


import './App.css';
import ViewRecord from './Pages/ViewRecord/ViewRecord';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Layout /> } className='App' >
          <Route index element={ <Home /> } />
          <Route path='records' element={ <ViewRecord /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
