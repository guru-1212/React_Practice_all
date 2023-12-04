import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header/Header';
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Suraj from './components/ForSuraj/Suraj';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/Guru" element={<div>Guru Component</div>} />
        <Route path="/Pravin" element={<div>Pravin Component</div>} />
        <Route path="/Arvind" element={<div>Arvind Component</div>} />
        <Route path="/Suraj" element={<Suraj/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);
reportWebVitals();
