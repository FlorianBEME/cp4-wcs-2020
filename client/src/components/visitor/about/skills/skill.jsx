import React from 'react'
import "./skill.css"

function skill(props) {
    return (
        <div className="card-skill ml-1 mr-1">
            <img src={props.img} alt={props.alt}/>
            <h5>{props.name}</h5>
        </div>
    )
}

export default skill
