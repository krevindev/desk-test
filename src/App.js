import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartupWindow from "./components/StartupWindow";
import LoginPage from "./components/LoginPage";
import MainMenu from "./components/MainMenu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartupWindow />} />
        <Route path="/login-window" element={<LoginPage />} />
        <Route path="/mainmenu-window" element={<MainMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
