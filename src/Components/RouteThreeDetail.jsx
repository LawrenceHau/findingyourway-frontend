import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'




function RouteThreeDetail(props) {



const [ allRoutes, setAllRoutes ] = useState('');   

useEffect(() => {
const url= `http://localhost:8000/api/route/?format=json`


fetch(url) 
.then((res) => res.json())

.then((data) => {
        setAllRoutes(data)
        console.log(data)
    })
    
    .catch(console.error);
}, []);

    console.log(allRoutes)
    if (!allRoutes) {
        return null
    } else {
        return (

        <div className='adventure-detail-container'>

<Card className="bg-dark text-white" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={allRoutes[6].photo_url} />
    <Card.Body>
        <Card.Title>{allRoutes[6].route}</Card.Title>
        <Card.Text>{allRoutes[6].text}</Card.Text>
        <Button href="/tundraicecaveending" variant="primary">Enter the ice cave</Button>{' '}
    </Card.Body>
</Card>

<Card className="bg-dark text-white" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={allRoutes[7].photo_url} />
    <Card.Body>
        <Card.Title>{allRoutes[7].route}</Card.Title>
        <Card.Text>{allRoutes[7].text}</Card.Text>
        <Button href="/tundrabottomofmountainending" variant="primary">Climb to the down towards the town</Button>{' '}
    </Card.Body>
</Card>

<Card className="bg-dark text-white" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={allRoutes[8].photo_url} />
    <Card.Body>
        <Card.Title>{allRoutes[8].route}</Card.Title>
        <Card.Text>{allRoutes[8].text}</Card.Text>
        <Button href="/tundratopofmountainending" variant="primary">Climb to the top of the mountain</Button>{' '}
    </Card.Body>
</Card>
<br></br>
<Button href="/paths" variant="primary">I didn't dream this</Button>{' '}
    </div>
);
}
}

export default RouteThreeDetail;