import React from "react";

const Button = (props) => {
  const { handleNavigate } = props;
  return (
    <button
      className="px-6 py-3  bg-primary rounded-lg font-medium"
      onClick={handleNavigate}
    >
      Watch Now
    </button>
  );
};

export default Button;
