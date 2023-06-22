import React from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="max-w-800px h-[450px] text-white rounded-lg p-5 justify-center items-center relative">
      <div className="w-full h-full absolute top-0 left-0 traslate-x-[50%] translate-y-[50%]">
        <h1 className="text-8xl font-bold text-center mb-5">404</h1>
        <p className="text-center text-lg font-bold mb-5">
          Sorry, we were unable to find that page
        </p>
        <span className="text-center flex justify-center items-center cursor-pointer text-white underline hover:text-primary" onClick={handleNavigate}>
          Start from home page
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
