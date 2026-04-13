import React from "react";
import LoginPage from "./pages/login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JoinUsPage from "./pages/JoinUs";
import ProfilePage from "./pages/profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/joinus" element={<JoinUsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default App;
