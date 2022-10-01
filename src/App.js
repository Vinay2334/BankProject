import React from 'react';
import Nav from './components/Nav'
import './App.css';
import{
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Home  from './components/Home';
import TranState from './context/transactions/TranState';
import Customer from './components/Customer'
import Tra from './components/Tra'
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Router>
      <TranState>
      {!localStorage.getItem('token')? <></>:<Nav/>}
      <ToastContainer/>
      <div className="container" style={{"marginTop":"100px"}}>
      <Routes>
      <Route path="/" element={!localStorage.getItem('token')? <Login/>:<Home/>} />
      <Route path="/customers" element={<Customer/>} />
      <Route path="/aboutUs" element={<Tra/>} />
      </Routes>
      </div>
      </TranState>
      </Router>
    </div>
  );
}

export default App;
