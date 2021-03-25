import React, { ReactNode } from 'react'
import './HotelCard.css';

type props = {
    children:ReactNode
}

export default function HotelCard(props:props) {
    return (
        <div className="hotel-card">
            {props.children}
        </div>

    )
}
