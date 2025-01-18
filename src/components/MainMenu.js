import React, { useEffect } from "react";
import Sidebar from './Sidebar.js';

const MainMenu = () => {
  useEffect(() => {
    document.title = "Dashboard";
  });

  return (
    <div className="bg-gray-900 h-screen">
      <Sidebar/>
    </div>
  );
};

export default MainMenu;
