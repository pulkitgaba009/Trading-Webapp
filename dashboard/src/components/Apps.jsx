import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
// import Profile from "./"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}