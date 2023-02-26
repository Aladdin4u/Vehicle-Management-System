import React from "react";
import {
    NavLink,
    Routes,
    Route,
    useParams,
    Outlet,
  } from "react-router-dom";
  import { FaUsers, FaSearch, FaCar } from 'react-icons/fa'
  import { MdDashboard } from 'react-icons/md'
  import { TbReport, TbLayoutDashboard } from 'react-icons/tb'

const UserDashboard = () => {

    // const params = useParams();
    // const match = useMatch();
    const styles = {
        display: "block",
        backgroundColor: "green",
        color: "white",
        padding: "15px",
    }

    return ( 
        <div className="flex w-full">
            
            <div className="w-[25%] bg-white h-screen">
                <div className="flex justify-between items-center mb-8 p-4 border-b-2">
                    <img src="/" alt="img" className="w-14 h-14 rounded-full bg-red-300" />
                    <strong>Welcome User</strong>
                </div>
                <ul className="py-2">
                    <li className="mb-4" >
                        <NavLink 
                            to="."
                            className="px-4 py-2"
                            style={({isActive}) => isActive ? styles : null}
                            end
                        >
                          <TbLayoutDashboard style={{display: "inline"}} /> Dashboard
                        </NavLink>
                    </li>
                    <li className="mb-4">
                        <NavLink 
                            to="view"
                            className="px-4 py-2"
                            style={({isActive}) => isActive ? styles : null}
                        >
                           <MdDashboard style={{display: "inline"}} /> View Vechicle
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-[75%] bg-gray-300 p-4">
                <div className="mb-4">
                    <h2 className="uppercase mb-2 font-bold text-white">My Dashboard</h2>
                </div>
                    <Outlet />
            </div>
        </div>
     );
}
 
export default UserDashboard;