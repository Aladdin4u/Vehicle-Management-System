import React from "react";
import {
    NavLink,
    Routes,
    Route,
    useParams,
    useMatch,
  } from "react-router-dom";
import VechicleList from "./VehicleList";

const AdminDashboard = () => {

    // const params = useParams();
    // const match = useMatch();

    return ( 
        <div className="flex w-full">
            
            <div className="w-[25%] bg-white p-4">
                <div className="flex justify-between items-center mb-8 p-4 border-b-2">
                    <img src="/" alt="img" className="w-14 h-14 rounded-full bg-red-300" />
                    <strong>Welcome Admin</strong>
                </div>
                <ul>
                    <li>
                        <NavLink exact activeClassName="tab-active">
                            Overview
                        </NavLink>
                    </li>
                    <li>add vehicle</li>
                    <li>category</li>
                </ul>
            </div>
            <div className="w-[75%] bg-gray-300 p-4">
                <div className="flex justify-between items-center">
                    <h2>My Dashboard</h2>
                    <div className="px-4 py-2 rounded-full overflow">
                        <input 
                            type="search"
                            placeholder="serach vehicle"
                            className="px-4 py-2 rounded-full border-none focus:outline-none"
                        />
                    </div>
                    {/* <Routes>
                        <Route element={match.path}>
                        <VechicleList />
                        </Route>
                    </Routes> */}
                </div>
                    <VechicleList />
            </div>
        </div>
     );
}
 
export default AdminDashboard;