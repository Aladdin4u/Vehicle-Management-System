import React from "react";
import Create from "../components/Create";

const Register = () => {
    return ( 
        <div className="p-8 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="hidden sm:block bg-blue-400 w-full h-full"></div>
                <Create />
            </div>
        </div>
     );
}
 
export default Register;