import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/nav';
import Footer from './components/footer/footer';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './components/lodOuts/Home/home';
import Address from './components/lodOuts/About/about';


function App() {

  
  
  return ( 
    <BrowserRouter>
    <div>
      <Header/>
      <Navbar/>
        <Routes>
          <Route exact={true} element={<Home/>} path='/'>Home</Route>
          <Route element={<Address/>} path='/about'>Home</Route>
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
