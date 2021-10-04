import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'




function TundraBottomOfMountainEnding(props) {



const [ allEndings, setAllEndings ] = useState('');   

useEffect(() => {
const url= `http://localhost:8000/api/ending/?format=json`


fetch(url) 
.then((res) => res.json())

.then((data) => {
        setAllEndings(data)
        console.log(data)
    })
    
    .catch(console.error);
}, []);

    console.log(allEndings)
    if (!allEndings) {
        return null
    } else {
        return (

        <div className='adventure-detail-container'>

<Card className="bg-dark text-white" style={{ width: '54rem' }}>
    <Card.Img variant="top" src={allEndings[7].photo_url} />
    <Card.Body>
        <Card.Title>{allEndings[7].path}</Card.Title>
        <Card.Text>{allEndings[7].ending}</Card.Text>
        <Card.Text>{allEndings[7].text}</Card.Text>
        <Button href="/adventure" variant="primary">Restart?</Button>{' '}
        <Button href="/routethree" variant="primary">Return to the last checkpoint?</Button>{' '}
    </Card.Body>
</Card>
    </div>
);
}
}

export default TundraBottomOfMountainEnding;