import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Button } from 'react-bootstrap'
import { DataContext } from './DataContext';

function Main(props)
    
    return (
        <div className="startScreen">
            <h3>Find Your Way</h3>
            <Link to= {`/routes`}>
                <Button className="startButton" variant="outline-preliminary">Start your journey</Button>
            </Link>
        </div>)