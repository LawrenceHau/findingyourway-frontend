import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="header">
            <Link to='/'><h1 className="main-header-title">Finding Your Way</h1></Link>
        </div>
    );
}

export default Header;