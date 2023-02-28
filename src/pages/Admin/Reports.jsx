import React, { useState } from "react";
import Button from "../../components/Button";

const Reports = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
  });
  console.log(formData);
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ from: "", to: "" });
    alert("form submitted");
    console.log("form submitted");
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <h2 className="block w-full bg-gray-100 px-3 py-2 shadow mb-2 font-bold">
        Report
      </h2>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full bg-white px-8 pt-6 pb-8 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="from"
                  className="text-grey-700 text-sm font-bold"
                >
                  From Date
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  id="from"
                  name="from"
                  placeholder="From date"
                  value={formData.from}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label htmlFor="to" className="text-grey-700 text-sm font-bold">
                  To Date
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  id="to"
                  name="to"
                  placeholder="To date"
                  value={formData.to}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-green-500 hover:bg-green-800">
                Get Report
              </Button>
            </div>
          </form>
        </div>

      </div>
        <div className="w-full px-3 py-2">
          <h2 className="block w-full bg-gray-100 px-3 py-2 shadow font-bold">
            Date Result
          </h2>
          <table className="text-sm text-left md:text-md border-collapse table-auto w-full">
            <thead>
              <tr>
                <th className="py-3 bg-green-500 text-white">S/N</th>
                <th className="py-3 bg-green-500 text-white">Parking Number</th>
                <th className="py-3 bg-green-500 text-white">Owner Name</th>
                <th className="py-3 bg-green-500 text-white">
                  Vehicle Reg Number
                </th>
                <th className="py-3 bg-green-500 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">1</td>
                <td className="py-3">3243009894</td>
                <td className="py-3">John</td>
                <td className="py-3">DEl-55576</td>
                <td className="py-3 space-x-4">
                  <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-green-500 hover:bg-green-800">
                    Print
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Reports;
