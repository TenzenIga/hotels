import React from 'react'
import {ReactComponent as EmptyStar} from '../../assets/star.svg';
import {ReactComponent as MarkedStar} from '../../assets/star-marked.svg';

type props = {
    marked: boolean
    
}

export default function Star(props:props) {
    const {marked} = props;
    return marked ? <MarkedStar /> : <EmptyStar /> 
}
