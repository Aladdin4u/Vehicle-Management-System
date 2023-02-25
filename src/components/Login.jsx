import React, { useState } from 'react';
import Button from './Button';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return ( 
        <div className="w-full max-w-2xl">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-grey-700 text-sm font-bold mb-2">Username</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Your username"
                        value={username}
                        onChange={((e) => setUsername(e.target.value) )}
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
                        value={password}
                        onChange={((e) => setPassword(e.target.value))}
                    />
                    <p className="text-red-500 text-xs italic">Please choose a password</p>
                </div>
                <div className="flex items-center justify-between">
                <Button text="Sign In" />
                    <a href='#' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Forgot Password?</a>
                </div>
            </form>
        </div>
     );
}
 
export default Login;