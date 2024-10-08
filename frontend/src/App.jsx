import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login/Login.jsx';
import Register from './Components/Auth/Register/Register.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {}
        <Route path="/register" element={<Register />} />  {}
      </Routes>
    </Router>
  );
}

export default App;

