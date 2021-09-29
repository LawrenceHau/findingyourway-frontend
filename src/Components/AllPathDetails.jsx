import React, {useState, useEffect } from 'react'

function AllPathDetails(props){
    const url =`http://localhost:8000/paths/${props.match.params.id}?format=json`
    const[paths, setpath]=useState([{}])
    useEffect(() => {
        fetch(url)
        .then((res)=>res.json())
        .then((json)=>{
            setpath(json.paths)
        })
        .catch(console.error)
    }, []);
    console.log(paths)

    return (
        <div>
            <div className='adventure-detail-image'>
                    <img src={paths.photo_url}/>
                </div>
                <div className='adventure-detail-information'>
                    {paths.path}
                    <br/>
                    {paths.photo_url}
                    <br/>
                    {paths.text}
                </div>
            </div>
    )
}

export default AllPathDetails;