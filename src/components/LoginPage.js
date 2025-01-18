import React from "react";

const LoginInput = ({ placeholder, type = "text" }) => {
  return (
    <div className="w-full">
      <h4 className="text-gray-300 w-full select-none">{placeholder}:</h4>
      <input
        className="my-1 h-[40px] px-3 py-1 rounded-sm w-full bg-gray-950 text-white border border-gray-900 focus:border-green-800 outline-none"
        type={type}
        // placeholder={placeholder}
      />
    </div>
  );
};

const LoginPage = () => {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-full bg-gray-900">
      <form
        onSubmit={handleLoginSubmit}
        className="w-full h-full flex flex-col items-center justify-center relative"
      >
        {/* Form Header */}
        <div className="flex flex-col w-[75%] items-center justify-center">
          <div
            style={{ WebkitAppRegion: "drag" }}
            className="w-full pb-5 flex items-center"
          >
            <div className="h-[1px] w-full bg-gray-600" />
            <h1 className="text-white mx-5 font-bold text-3xl text-center select-none">
              LOGIN
            </h1>
            <button
              onClick={() => window.electron.send("exit-app")}
              className="absolute right-5 top-2 hover:bg-red-700 bg-gray-800 text-white rounded-full size-8 p-1 font-bold flex justify-center items-center select-none"
            >
              X
            </button>
            <div className="h-[1px] w-full bg-gray-600" />
          </div>

          {/* Form Inputs */}
          <LoginInput placeholder="Username" />
          <LoginInput placeholder="Password" type="password" />

          {/* Form Buttons */}
          <button
            onClick={() => {
              window.electron.send("open-menu");
            }}
            className="px-3 mt-5 h-[40px] py-1 bg-green-700 hover:bg-green-600 text-white font-bold w-full rounded-sm active:translate-y-1 transition-all ease-out"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
