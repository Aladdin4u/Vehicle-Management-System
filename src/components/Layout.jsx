import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return ( 
        <div className='w-full h-screen'>
            <Navbar />
            <main className=''>
                <Outlet />
            </main>
            <Footer />
        </div>
     );
}
 
export default Layout;