import React from 'react'
import './Breadcrumbs.css';

type props = {
    city:string
}
export default function Breadcrumbs({city}:props) {
    return (
        <ul className="breadcrumbs">
        <li>Отели</li>
        <li>{city}</li>
    </ul>
    )
}
