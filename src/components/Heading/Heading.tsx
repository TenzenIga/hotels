import React from 'react'
import './Heading.css';

type props = {
    text:string
}

export default function Heading(props:props) {
    return (
        <div className="heading">{props.text}</div>
    )
}
