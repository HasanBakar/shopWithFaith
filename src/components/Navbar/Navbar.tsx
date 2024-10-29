import React from 'react';
import { Link } from "react-router-dom";



const Navbar:React.FC  = () => {
    return (
        <nav>
            <Link to="/">logo</Link>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/home-living">Home & Living</Link>
            <Link to="/beauty">Beauty</Link>
            <Link to="/search">Search</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/bag">Bag</Link>
        </nav>
    );
};

export default Navbar;

