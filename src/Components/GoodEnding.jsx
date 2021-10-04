import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'




function GoodEnding(props) {



const [ allEndings, setAllEndings ] = useState('');   

useEffect(() => {
const url= `http://localhost:8000/endings?format=json`


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
    <Card.Img variant="top" src={allEndings[2].photo_url} />
    <Card.Body>
        <Card.Title>{allEndings[2].ending}</Card.Title>
        <Card.Text>{allEndings[2].text}</Card.Text>
        <Button href="/" variant="primary">Let's try again...</Button>{' '}
    </Card.Body>
</Card>

    </div>
);
}
}

export default GoodEnding;