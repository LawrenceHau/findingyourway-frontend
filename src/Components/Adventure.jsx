import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AdventureDetails({ post, match }) {



const [adventure, setAdventure] = useState()
const adventureUrl = `http://localhost:8000/api/adventure/?format=json`


    useEffect(() => {
        axios.get(adventureUrl).then(res => {
        setAdventure(res.data)
        })
    }, [])



    if (!adventure) {
        return null
    } else {
        return (
            <div>
<Card className="bg-dark text-white" style={{ width: '54rem' }}>
    <Card.Img variant="top" src={adventure[0].photo_url} />
    <Card.Body>
        <Card.Title>{adventure[0].adventure}</Card.Title>
        <Card.Text>{adventure[0].text}</Card.Text>
        <Button href="paths" variant="primary">I see a...</Button>{' '}
    </Card.Body>
</Card>
            </div>
        );
    }
}

export default AdventureDetails;