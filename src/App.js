import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Login from './Login';
import Home from './Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (value) => {
    setIsAuthenticated(value);
  }

  return  (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuthenticated
            ? <Home/>
            : <Navigate to="/login" replace />
          }/>
        <Route path='/login' element={<Login setAuth={setAuth}/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;