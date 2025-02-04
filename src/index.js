import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './tab.js';
// //import MainPage from './layout.js';
// import Login from './login.js';
// import HomePage from './home.js';
import Navbar from './pages/navigation.js';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import Footer from './pages/footer.js';

const rootelement = document.getElementById('root');
const root = ReactDOM.createRoot(rootelement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
  </React.StrictMode>
);

