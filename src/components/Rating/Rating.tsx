import React from 'react'
import Star from './Star';

type props = {
    value:number
}

export default function Rating(props:props) {
    const {value} = props
    const [rating, setRating] = React.useState((value) || 0);

 
    return (
        <div className='rating'>
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          key={`star_${i + 1}`}
          marked = { value > i}
        />
      ))}
        </div>
    )
}
