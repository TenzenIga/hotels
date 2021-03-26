import React from 'react'
import Rating from '../Rating/Rating'
import {ReactComponent as Heart} from '../../assets/heart.svg';
import './HotelInfo.css';
import { IHotelInfo } from '../../store/Hotels/actions';


type props = {
    hotel:IHotelInfo
    toggleFavorite:(arg:IHotelInfo)=>void
}

export default function HotelInfo(props:props) {

    const {hotel, toggleFavorite} = props;
    
    const handleClick = () =>{
        toggleFavorite(hotel)
    }

    return (
        <div className="hotel-info">
            <div className="hotel-info__header">
                <span>
                {hotel.hotelName}
                </span>
                <Heart onClick={()=>handleClick()} /> 
            </div>
            <div className="hotel-info__date">{hotel.checkIn}  -  {hotel.days} день</div>
            <div className='hotel-info__footer'>
                <Rating value={hotel.stars} />
                <div className="price">
                    <span>Price:</span> {hotel.priceAvg} ₽
                </div>
            </div>
        </div>
    )
}
