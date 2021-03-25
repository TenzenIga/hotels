import React from 'react'
import Rating from '../Rating/Rating'
import {ReactComponent as Heart} from '../../assets/heart.svg';
import './HotelInfo.css';

export default function HotelInfo() {
    return (
        <div className="hotel-info">
            <div className="hotel-info__header">
                <span>
                Moscow Marriott Grand Hotel
                </span>
                <Heart /> 
            </div>
            <div className="hotel-info__date">28 June, 2020  -  1 день</div>
            <div className='hotel-info__footer'>
                <Rating value={3} />
                <div className="price">
                    <span>Price:</span> 23 924 ₽
                </div>
            </div>
        </div>
    )
}
