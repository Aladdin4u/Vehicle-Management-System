import React from "react";
import Button from "../../components/Button";

const ManageVehicle = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <h1 className="block w-full bg-gray-100 px-3 py-2 shadow mb-2 font-bold">
        Managed Incoming Vehicle
      </h1>
      <div className="px-3 py-2">
        <table className="text-sm text-left md:text-md border-collapse table-auto w-full">
          <thead>
            <tr>
              <th className="py-3 text-white bg-green-500">S/N</th>
              <th className="py-3 text-white bg-green-500">Parking Number</th>
              <th className="py-3 text-white bg-green-500">Owner Name</th>
              <th className="py-3 text-white bg-green-500">
                Vehicle Reg Number
              </th>
              <th className="py-3 text-white bg-green-500">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3">1</td>
              <td className="py-3">3243009894</td>
              <td className="py-3">John</td>
              <td className="py-3">DEl-55576</td>
              <td className="py-3 space-x-2">
              <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-green-500 hover:bg-green-800">
                    View
                  </Button>
              <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-yellow-500 hover:bg-yellow-800">
                    Print
                  </Button>
              <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-red-500 hover:bg-red-800">
                    Delete
                  </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="block w-full bg-gray-100 px-3 py-2 shadow mb-2 font-bold">
        View Incoming Vehicle
      </h1>
      <div className="px-3 py-2">
        <table className="text-sm text-left md:text-md border-collapse table-auto w-full">
          <thead>
            <tr>
              
            </tr>
            <tr>
              
            </tr>
            <tr>
              
            </tr>
            <tr>
              
            </tr>
            <tr>
              
            </tr>
            <tr>
              
            </tr>
            <tr>
             
            </tr>
            <tr>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="py-3">Parking Number</th>
              <td className="py-3">123456789</td>
            </tr>
            <tr>
            <th className="py-3">Vehicle category</th>
              <td className="py-3">Bus</td>
            </tr>
            <tr>
            <th className="py-3">Vehicle company name</th>
              <td className="py-3">Honda</td>
            </tr>
            <tr>
            <th className="py-3">Registrationn number</th>
              <td className="py-3">UPS56789</td>
            </tr>
            <tr>
            <th className="py-3">Owner Name</th>
              <td className="py-3">John</td>
            </tr>
            <tr>
            <th className="py-3">Registrationn number</th>
              <td className="py-3">8823456789</td>
            </tr>
            <tr>
            <th className="py-3">color</th>
              <td className="py-3">red</td>
            </tr>
            <tr>
            <th className="py-3">Time in</th>
              <td className="py-3">2023-02-27</td>
            </tr>
            <tr>
            <th className="py-3">status</th>
              <td className="py-3">Vehicle in</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageVehicle;
