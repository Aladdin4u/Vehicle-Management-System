import React from "react";
import {
    NavLink,
    Outlet,
  } from "react-router-dom";
  import { FaUsers, FaSearch, FaCar, FaUserCircle } from 'react-icons/fa'
  import { MdDashboard } from 'react-icons/md'
  import { TbReport, TbLayoutDashboard } from 'react-icons/tb'

const AdminDashboard = () => {
    const styles = {
        display: "block",
        backgroundColor: "green",
        color: "white",
        padding: "15px",
    }

    return ( 
        <div className="flex w-full min-h-screen bg-gray-300">
            
            <div className="w-[25%] bg-white">
                <div className="flex justify-between items-center mb-8 p-4 border-b-2">
                    <FaUserCircle size={18} />
                    {/* <img src="/" alt="img" className="w-14 h-14 rounded-full bg-red-300" /> */}
                    <strong>Welcome Admin</strong>
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
                            to="category"
                            className="px-4 py-2"
                            style={({isActive}) => isActive ? styles : null}
                        >
                           <MdDashboard style={{display: "inline"}} /> Vechicle Category
                        </NavLink>
                    </li>
                    <li className="mb-4">
                        <NavLink 
                            to="addvehicle"
                            className="px-4 py-2"
                            style={({isActive}) => isActive ? styles : null}
                        >
                           <FaCar style={{display: "inline"}} /> Add Vechicle
                        </NavLink>
                    </li>
                    <li className="mb-4">
                        <NavLink 
                            to="managevehicle"
                            className="px-4 py-2"
                            style={({isActive}) => isActive ? styles : null}
                        >
                           <FaCar style={{display: "inline"}} /> Manage Vechicle
                        </NavLink>
                    </li>
                    <li className="mb-4">
                        <NavLink 
                            to="reports"
                            className="px-4 py-2"
                            style={({isActive}) => isActive ? styles : null}
                        >
                           <TbReport style={{display: "inline"}} /> Reports
                        </NavLink>
                    </li>
                    <li className="mb-4">
                        <NavLink 
                            to="search"
                            className="px-4 py-2"
                            style={({isActive}) => isActive ? styles : null}
                        >
                            <FaSearch style={{display: "inline"}} /> Search Vehicle
                        </NavLink>
                    </li>
                    <li className="mb-4">
                        <NavLink 
                            to="regusers"
                            className="px-4 py-2"
                            style={({isActive}) => isActive ? styles : null}
                        >
                            <FaUsers style={{display: "inline"}} /> Reg Users
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-[75%] p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="uppercase mb-2 font-bold text-white">Dashboard</h2>
                    <div className="px-4 py-2 overflow">
                        <input 
                            type="search"
                            placeholder="search vehicle..."
                            className="px-6 py-2 rounded-full border-none focus:outline-none"
                        />
                    </div>
                </div>
                    <Outlet />
            </div>
        </div>
     );
}
 
export default AdminDashboard;