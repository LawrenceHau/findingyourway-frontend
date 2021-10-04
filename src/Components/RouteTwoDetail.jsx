import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'




function RouteTwoDetail(props) {



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
    <Card.Img variant="top" src={allRoutes[3].photo_url} />
    <Card.Body>
        <Card.Title>{allRoutes[3].route}</Card.Title>
        <Card.Text>{allRoutes[3].text}</Card.Text>
        <Button href="/desertsandoneending" variant="primary">Walk towards the sand</Button>{' '}
    </Card.Body>
</Card>

<Card className="bg-dark text-white" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={allRoutes[4].photo_url} />
    <Card.Body>
        <Card.Title>{allRoutes[4].route}</Card.Title>
        <Card.Text>{allRoutes[4].text}</Card.Text>
        <Button href="/desertsandtwoending" variant="primary">Walk towards the other sand</Button>{' '}
    </Card.Body>
</Card>

<Card className="bg-dark text-white" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={allRoutes[5].photo_url} />
    <Card.Body>
        <Card.Title>{allRoutes[5].route}</Card.Title>
        <Card.Text>{allRoutes[5].text}</Card.Text>
        <Button href="/desertsandthreeending" variant="primary">Turn 360° and Walk Away</Button>{' '}
    </Card.Body>
</Card>
<br></br>
<Button href="/paths" variant="primary">I didn't dream this</Button>{' '}
<br></br>

<div className = 'Idk'>
    <br></br>
    <img src = 'https://4.bp.blogspot.com/-SQA3d7NwSCE/Ur1rMrSiRpI/AAAAAAAAPh0/mnmxLbwtw54/s1600/what-i-expected.gif'></img>
</div>
    </div>
);
}
}

export default RouteTwoDetail;