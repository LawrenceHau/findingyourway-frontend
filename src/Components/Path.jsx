import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PathDetails({ post, match }) {


    
    
    const [path, setPath] = useState()
    const pathUrl = `http://localhost:8000/paths/1?format=json`

function getPath(){
    
}

    useEffect(() => {
        axios.get(pathUrl).then(res => {
        setPath(res.data)
        })
    }, [])

        function HandleClick(){
            const pathUrl  = `http:localhost:8000/paths/?format=json`

            const [path, setPath] = useState()

            useEffect(() => {
                axios.get(pathUrl).then(res=>{
                    setPath(res.data)
                })
            })
        }

    if (!path) {
        return null
    } else {
        return (
        
            <div className='adventure-detail-container'>

                <div className='adventure-detail-image'>
                    <img src={path.photo_url}/>
                </div>
                <div className='adventure-detail-information'>
                    {path.path}
                    <br/>
                    {path.text}
                </div>
            </div>
        );
    }
}

export default PathDetails;