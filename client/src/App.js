import React from "react";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";
import Stores from "./pages/Stores";
import Vehicles from "./pages/Vehicles";
import Reservations from "./pages/Reservations";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


  function App() {
    return (
      <Router>
        
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/reservations" element={<Reservations/>} />
        </Routes>
        
      </Router>
    );
  }
  
  export default App;
