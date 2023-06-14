import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calls from './pages/Calls';
import Departments from './pages/Departments';
import Employees from './pages/Employees';
import Home from './pages/Home';
// import Permissions from './pages/Permissions';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calls" element={<Calls />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/departments" element={<Departments />} />
      {/* <Route path="/permissions" element={<Permissions />} /> */}
    </Routes>
  );
};

export default AppRoutes;
