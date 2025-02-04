import React from 'react';
//import './navigation.css' 
import Navbar from './navigation';
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Signup from './signup';
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Footer from './footer';

function Layout() {
  return (
    <div className="app">
      <header>
        <Navbar/>
        
      </header>
      <main className="content">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </div>
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default Layout;