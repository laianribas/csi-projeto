import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calls from './pages/Calls';
import Employees from './pages/Employees';
import Home from './pages/Home';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calls" element={<Calls />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
};

export default AppRoutes;
