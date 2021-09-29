import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AdventureDetails({ post, match }) {

    // const currentAdventure = match.params.id
    
    
    const [adventure, setAdventure] = useState()
    const adventureUrl = `http://localhost:8000/adventures/1?format=json`

function getAdventure(){
    
}

    useEffect(() => {
        axios.get(adventureUrl).then(res => {
        setAdventure(res.data)
        })
    }, [])

        function HandleClick(){
            const pathUrl  = `http:localhost:8000/paths/1?format=json`

            const [path, setPath] = useState()

            useEffect(() => {
                axios.get(pathUrl).then(res=>{
                    setPath(res.data)
                })
            })
        }

    if (!adventure) {
        return null
    } else {
        return (
            <div className='adventure-detail-container'>

                <div className='adventure-detail-image'>
                    <img src={adventure.photo_url}/>
                </div>
                <div className='adventure-detail-information'>
                    {adventure.adventure}
                    <br/>
                    {adventure.photo_url}
                    <br/>
                    {adventure.text}
                    <br/>
                    <button href="${adventure.paths[0]">{adventure.paths[0]}</button>
                    <br/>
                    {adventure.paths[1]}
                    <br/>
                    {adventure.paths[2]}
                    <br/>
                </div>
            </div>
        );
    }
}

export default AdventureDetails;