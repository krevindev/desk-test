import React from "react";

const NavLink = ({ name }) => {
  return (
    <div className="hover:bg-gray-900 w-full cursor-pointer box-border px-3 py-2 text-white">
      {name}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-[20vw] max-w-[200px] bg-gray-800 h-screen flex flex-col justify-evenly items-center">
      <div>
        <div className="bg-green-500 rounded-full size-11"></div>
      </div>
      <div className="w-full">
        <ul className="w-full flex flex-col items-center justify-center">
          {["Home", "Dashboard", "View Data"].map((navDat) => {
            return <NavLink name={navDat} />;
          })}
        </ul>
      </div>
      <div>
        <button onClick={() => window.electron.send("logout")}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
