import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'




function RouteOneDetail(props) {



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
    <Card.Img variant="top" src={allRoutes[0].photo_url} />
    <Card.Body>
        <Card.Title>{allRoutes[0].route}</Card.Title>
        <Card.Text>{allRoutes[0].text}</Card.Text>
        <Button href="/jungleriverbankending" variant="primary">Let's walk along it</Button>{' '}
    </Card.Body>
</Card>

<Card className="bg-dark text-white" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={allRoutes[1].photo_url} />
    <Card.Body>
        <Card.Title>{allRoutes[1].route}</Card.Title>
        <Card.Text>{allRoutes[1].text}</Card.Text>
        <Button href="/junglestairsending" variant="primary">Guess I'll walk up</Button>{' '}
    </Card.Body>
</Card>

<Card className="bg-dark text-white" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={allRoutes[2].photo_url} />
    <Card.Body>
        <Card.Title>{allRoutes[2].route}</Card.Title>
        <Card.Text>{allRoutes[2].text}</Card.Text>
        <Button href="junglecavernending" variant="primary">This seems like an okay place to hide</Button>{' '}
    </Card.Body>
</Card>
                    <br></br>
<Button href="/paths" variant="primary">I didn't dream this</Button>{' '}
    </div>
);
}
}

export default RouteOneDetail;