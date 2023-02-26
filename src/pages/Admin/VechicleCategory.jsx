import React, { useState } from 'react';
import Button from '../../components/Button';

const VechicleCategories = () => {
    const [category, setCategory] = useState('');

    return ( 
        <div className="w-full bg-white px-3 py-2 rounded-lg">
            <h1 className="block w-full bg-white uppercase px-3 py-2 mb-4 font-bold">Vehicle Category</h1>

            <div className="w-full flex flex-col items-center justify-center">
                <h2 className="block w-full bg-gray-300 px-3 py-2 shadow mb-2 font-bold">Add Category</h2>
                    <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
                        <div className="flex flex-row mb-2">
                            <div className="basis-1/4">
                                <label htmlFor="category" className="text-grey-700 text-sm font-bold">Category Name</label>
                            </div>
                            <div className="basis-3/4">
                                    <input
                                        className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        id="category"
                                        name="category"
                                        placeholder="Enter Category..."
                                        value={category}
                                        onChange={((e) => setCategory(e.target.value) )}
                                    />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                        <Button text="Add" />
                        </div>
                    </form>
            </div>
            <div className="w-full">
                <h2 className="block w-full bg-gray-300 px-3 py-2 uppercase shadow mb-2 font-bold">Manage Category</h2>
                <table className="border-collapse table-auto w-full">
                    <thead>
                        <tr>
                            <th className="py-3 bg-green-500 text-white">S/N</th>
                            <th className="py-3 bg-green-500 text-white">Category</th>
                            <th className="py-3 bg-green-500 text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3">1</td>
                            <td className="py-3">Four wheel vehicle</td>
                            <td className="py-3 space-x-4">
                                <Button text="Edit" />
                                <Button text="Delete" />
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3">2</td>
                            <td className="py-3">Two wheel vehicle</td>
                            <td className="py-3 space-x-4">
                                <Button text="Edit" />
                                <Button text="Delete" />
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3">3</td>
                            <td className="py-3">Bicycles</td>
                            <td className="py-3 space-x-4">
                                <Button text="Edit" />
                                <Button text="Delete" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default VechicleCategories;