import React, { useEffect, useState } from "react";

const StartupWindow = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  const openLoginWindow = () => {
    window.electron.send("open-login-window");
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       openNewWindow();
  //     }, 1000);
  //   }, []);

  const frames = [
    "Opening App",
    "Opening App.",
    "Opening App..",
    "Opening App...",
  ];

  useEffect(() => {
    let loadingTimeout = setTimeout(() => {
      openLoginWindow();
      clearInterval(loadingTimeout);
    }, 2000);

    let animationInterval = setInterval(() => {
      setCurrentFrame((prev) => {
        if (prev < frames.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 200);

    return () => {
      clearInterval(animationInterval);
      clearInterval(loadingTimeout);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl text-white">{frames[currentFrame]}</h1>

      <div className="w-full pt-3 flex justify-center items-end">
        <button
          onClick={() => window.electron.send("exit-app")}
          className="bg-gray-800 px-5 py-1 text-gray-500 hover:bg-red-900 hover:text-white rounded-sm"
        >
          Cancel
        </button>
      </div>
      {/* <button onClick={openNewWindow}>Open New Window</button> */}
    </div>
  );
};

export default StartupWindow;
