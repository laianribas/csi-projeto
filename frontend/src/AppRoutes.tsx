import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Calls from './pages/Calls';
import Departments from './pages/Departments';
import Employees from './pages/Employees';
import Home from './pages/Home';
import Login from './pages/Login';
import Permissions from './pages/Permissions';


const AppRoutes: React.FC = () => {
  const isAuthenticated = localStorage.getItem('token') // Coloque sua lógica de autenticação aqui
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
      <Route path="/home" element={!isAuthenticated ? <Navigate to="/" /> : <Home />} />
      <Route path="/calls" element={!isAuthenticated ? <Navigate to="/" /> : <Calls />} />
      <Route path="/employees" element={!isAuthenticated ? <Navigate to="/" /> : <Employees />} />
      <Route path="/departments" element={!isAuthenticated ? <Navigate to="/" /> : <Departments />} />
      <Route path="/permissions" element={!isAuthenticated ? <Navigate to="/" /> : <Permissions />} />
    </Routes>
  );
};

export default AppRoutes;
