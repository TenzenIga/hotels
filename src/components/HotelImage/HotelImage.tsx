import React from 'react'
import house from '../../assets/house.png';
import './HotelImage.css';

export default function HotelImage() {
    return (
        <div className="hotel-img">
            <img src={house} alt=""/>
        </div>
    )
}
