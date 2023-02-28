import React from "react";
import Create from "../components/Create";

const Register = () => {
  return (
    <div className="p-8 mx-auto max-w-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="hidden sm:block w-full">
          <img
            src="assets/images/undraw_navigator_a479.png"
            alt="undraw_navigator_a479.png"
            width={400}
            height={225}
          />
        </div>
        <Create />
      </div>
    </div>
  );
};

export default Register;
