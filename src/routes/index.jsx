import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // react-router-dom を利用
import FluxOrderly from "@/pages/FluxOrderly";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FluxOrderly />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
