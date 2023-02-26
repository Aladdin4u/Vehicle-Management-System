import React, { useState } from 'react';

const Reports = () => {
    const [formData, setFormData] = useState({
        from: "",
        to: ""
    });
    console.log(formData)
    const handleChange = (e) => {
        const { name, value, checked, type} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({from: "", to: ""})
        alert("form submitted")
        console.log("form submitted")
    }

    return ( 
        <div className="bg-white rounded-lg shadow-md">
            <h2 className="block w-full bg-gray-100 px-3 py-2 shadow mb-2 font-bold">Add Vehicle</h2>

            <div className="w-full flex flex-col items-center justify-center">
                
                    <div className="w-full bg-white px-8 pt-6 pb-8 mb-8">
                        <form onSubmit={handleSubmit}>

                            <div className="flex flex-row mb-2">
                                <div className="basis-1/4">
                                <label htmlFor="from" className="text-grey-700 text-sm font-bold">From Date</label>
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
                                <label htmlFor="to" className="text-grey-700 text-sm font-bold">To Date</label>
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
                                <button>Add</button>
                            {/* <Button text="Add" /> */}
                            </div>
                        </form>
                    </div>
                    
            </div>
        </div>
     );
}
 
export default Reports;