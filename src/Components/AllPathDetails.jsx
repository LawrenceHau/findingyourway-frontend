import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'




function AllPathDetails(props) {



const [ allPaths, setAllPaths ] = useState('');   

useEffect(() => {
const url= `http://localhost:8000/api/path/?format=json`


fetch(url) 
.then((res) => res.json())

.then((data) => {
        setAllPaths(data)
        console.log(data)
    })
    
    .catch(console.error);
}, []);

    console.log(allPaths)
    if (!allPaths) {
        return null
    } else {
        return (

        <div className='adventure-detail-container'>

<Card className="bg-dark text-white" style={{ width: '36rem'  }}>
    <Card.Img variant="top" src={allPaths[0].photo_url} />
    <Card.Body>
        <Card.Title>{allPaths[0].path}</Card.Title>
        <Card.Text>{allPaths[0].text}</Card.Text>
        <Button href="/routeone" variant="primary">As I Traverse the Jungle I Encounter...</Button>{' '}
    </Card.Body>
</Card>


<Card className="bg-dark text-white" style={{ width: '36rem',  }}>
    <Card.Img variant="top" src={allPaths[1].photo_url} />
    <Card.Body>
        <Card.Title>{allPaths[1].path}</Card.Title>
        <Card.Text>{allPaths[1].text}</Card.Text>
        <Button href="/routetwo" variant="primary">As I Trek Through the Desert I Notice...</Button>{' '}
    </Card.Body>
</Card>

<Card className="bg-dark text-white" style={{ width: '36rem' }}>
    <Card.Img variant="top" src={allPaths[2].photo_url} />
    <Card.Body>
        <Card.Title>{allPaths[2].path}</Card.Title>
        <Card.Text>{allPaths[2].text}</Card.Text>
        <Button href="/routethree" variant="primary">I Look Around the Arctic Tundra and See..</Button>{' '}
    </Card.Body>
</Card>
    </div>
);
}
}

export default AllPathDetails;