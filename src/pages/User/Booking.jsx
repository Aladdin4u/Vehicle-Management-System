import React, { useState } from "react";
import Button from "../../components/Button";

const Booking = () => {
  const [vehicleData, setVehicleData] = useState({
    type: "",
    start: "",
    end: "",
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setVehicleData((prevVehicleData) => {
      return {
        ...prevVehicleData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted");
    console.log("form submitted");
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <h2 className="block w-full bg-gray-100 px-3 py-2 shadow mb-2 font-bold">
        Book Ride
      </h2>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full bg-white px-8 pt-6 pb-8 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="type"
                  className="text-grey-700 text-sm font-bold"
                >
                  Vehicle Type
                </label>
              </div>
              <div className="basis-3/4">
                <select
                  id="type"
                  name="type"
                  value={vehicleData.type}
                  onChange={handleChange}
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">-- select type --</option>
                  <option value="Bus">Bus</option>
                  <option value="rickshaw">Rickshaw</option>
                  <option value="car">Car</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="start"
                  className="text-grey-700 text-sm font-bold"
                >
                  Start Routes
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="start"
                  name="start"
                  placeholder="start Routes"
                  value={vehicleData.start}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-row mb-2">
              <div className="basis-1/4">
                <label
                  htmlFor="end"
                  className="text-grey-700 text-sm font-bold"
                >
                  Finish Routes
                </label>
              </div>
              <div className="basis-3/4">
                <input
                  className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="end"
                  name="end"
                  placeholder="Finish Routes"
                  value={vehicleData.end}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button className="font-bold text-sm text-white px-3 py-2 rounded bg-green-500 hover:bg-green-800">
                Book rides
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
