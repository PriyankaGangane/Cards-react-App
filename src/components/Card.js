import React from 'react';

export default function Card(props) {
    
    return (
        <>
        <div className="Container">
        <div className="card">
            <img src={props.avatar} alt="" />
            <div className="card-content">
               <p>{props.fname} {props.lname}</p>
               <br></br>
               <h5>{props.email}</h5>
            </div>
        </div>
        </div>
        
        </>
    )
}