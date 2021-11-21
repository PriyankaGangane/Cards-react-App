import React from 'react';

export default function Navbar(props) {

    return (
        <div className="navbar">
           <div className="brand">
             <h4>Let's Grow More Intern</h4>
           </div>
             <button onClick={()=>{ props.handleClick(true);}} className="btn">Get Educators</button>
                     
        </div>
    )
}