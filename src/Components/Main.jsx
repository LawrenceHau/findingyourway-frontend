import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';

function Main(props){
    
    return (
        <div className="startScreen">
            <h3>Welcome to the game!</h3>
            <br></br>
<Button href="/adventure" variant="primary">Click Here to Find Your Way</Button>{' '}
        </div>
        )
}
export default Main;