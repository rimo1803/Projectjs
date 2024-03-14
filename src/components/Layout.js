// Layout.js

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
           
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
