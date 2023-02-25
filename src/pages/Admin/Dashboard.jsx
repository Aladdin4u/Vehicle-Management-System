import React from "react";
import {
    NavLink,
    Routes,
    Route,
    useParams,
    Outlet,
  } from "react-router-dom";

const AdminDashboard = () => {

    // const params = useParams();
    // const match = useMatch();
    const styles = {
        display: "block",
        backgroundColor: "green",
        color: "white",
        padding: "5px",
    }

    return ( 
        <div className="flex w-full">
            
            <div className="w-[25%] bg-white p-4">
                <div className="flex justify-between items-center mb-8 p-4 border-b-2">
                    <img src="/" alt="img" className="w-14 h-14 rounded-full bg-red-300" />
                    <strong>Welcome Admin</strong>
                </div>
                <ul>
                    <li>
                        <NavLink 
                            to="."
                            style={({isActive}) => isActive ? styles : null}
                            end
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="category"
                            style={({isActive}) => isActive ? styles : null}
                        >
                            Vechicle Category
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="addvehicle"
                            style={({isActive}) => isActive ? styles : null}
                        >
                            Add Vechicle
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="managevehicle"
                            style={({isActive}) => isActive ? styles : null}
                        >
                            Manage Vechicle
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="reports"
                            style={({isActive}) => isActive ? styles : null}
                        >
                            Reports
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="search"
                            style={({isActive}) => isActive ? styles : null}
                        >
                            Search Vehicle
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="regusers"
                            style={({isActive}) => isActive ? styles : null}
                        >
                            Reg Users
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-[75%] bg-gray-300 p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2>My Dashboard</h2>
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