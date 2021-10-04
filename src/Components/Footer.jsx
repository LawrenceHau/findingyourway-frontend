import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <Link to ='/'><h1 className="main-footer-title">Finding Your Way</h1></Link>
            <h4>Lawrence Hau ©2021</h4>
            </div>
    );
}

export default Footer;