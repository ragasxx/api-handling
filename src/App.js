import React from "react";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StatusCodes from "./pages/statusCodes";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statusCodes" element={<StatusCodes />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
