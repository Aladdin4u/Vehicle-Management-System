import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import Button from './Button';

const Create = () => {
    const [formData, setFormData] = useState({
        username: "",
        contact: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    console.log(formData)

    const handleChange = (e) => {
        const { name, value, checked, type} = e.target
        setFormData(prevFormData=> {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(formData.password === formData.confirmPassword) {
            alert("form submitted")
            console.log("form submitted")
        } else {
            alert("invalid password")
            console.log("invalid password")
        }
    }
    
    return ( 
        <div className="w-full max-w-2xl">
            <form className="bg-white shadow rounded px-4 py-3" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-grey-700 text-sm font-bold mb-2">Username</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Your username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="contact" className="block text-grey-700 text-sm font-bold mb-2">Mobile Number</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        id="contact"
                        name="contact"
                        placeholder="Your Mobile Number"
                        value={formData.contact}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-grey-700 text-sm font-bold mb-2">Email</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Mobile Number"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-grey-700 text-sm font-bold mb-2">Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-grey-700 text-sm font-bold mb-2">Confirm Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="align-baseline font-bold text-sm text-white px-3 py-2 rounded bg-blue-500 hover:bg-blue-800">Sign up</button>
                    {/* <Button ></Button> */}
                    <Link to="/userlogin" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Log in</Link>
                </div>
            </form>
        </div>
     );
}
 
export default Create;