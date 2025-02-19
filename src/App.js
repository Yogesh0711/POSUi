import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SideNavBar from "./homepage/SideNavBar";
import InventoryPage from './homepage/inventory/InventoryPage';
import Theme from './components/Theme';
import Mainmenu from './homepage/menupage/MainMenu';





function App() {
  const [selectedPage, setSelectedpage] = useState('/menu')

  return (
    <Router>
      <div className="App" style={{ "--primary-bg": Theme.primary }}>
        <SideNavBar setSelectedpage={setSelectedpage} selectedPage={selectedPage} />
        <Routes>
          <Route path="/" element={<Mainmenu />} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/menu" element={<Mainmenu />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/orderortable" element={<h1>menu</h1>} />
          <Route path="/reports" element={<h1>Dashboard</h1>} />
          <Route path="/staffs" element={<h1>menu</h1>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
