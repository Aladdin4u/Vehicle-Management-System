import React from "react";

const Button = ({text}) => {

  return (
    <button type="button" className="px-4 py-2 bg-green-500 text-white hover:bg-green-800 rounded focus:outline-none focus:shadow-outline">
        {text}
    </button>
  );
};

export default Button;
