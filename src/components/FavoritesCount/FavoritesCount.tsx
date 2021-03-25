import React from 'react'
import './FavoritesCount.css';

type props = {
    value:number
}

export default function FavoritesCount(props:props) {
    const {value} = props;

    return (
        <div className='favorite-info'>
            <span>Добавлено в Избранное: <b>{value}</b> отеля</span>
        </div>
    )
}
