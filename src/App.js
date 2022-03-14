import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';


import './App.css';
import ViewRecord from './Pages/ViewRecord/ViewRecord';
import CreateLocation from './Pages/CreateLocation/CreateLocation';
import CreateProduct from './Pages/CreateProduct/CreateProduct';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Layout /> } className='App' >
          <Route index element={ <Home /> } />
          <Route path='records' element={ <ViewRecord /> } />
          <Route path='location' element={ <CreateLocation /> } />
          <Route path='product' element={ <CreateProduct /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
