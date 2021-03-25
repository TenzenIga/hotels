import React from 'react'
import {ReactComponent as ArrowUp} from '../../assets/arrow-up.svg';
import {ReactComponent as ArrowDown} from '../../assets/arrow-down.svg';
import './FilterButtons.css';

export default function FilterButtons() {
    return (
        <div className="btn-group">
            <div className='filter active'>
                <span>Рейтинг</span>
                <div className="btn-control">
                    <ArrowUp />
                    <ArrowDown />
                </div>
            </div>
            <div className='filter'>
                <span>Цена</span>
                <div className="btn-control" >
                    <ArrowUp />
                    <ArrowDown />
                </div>
            </div>
        </div>
    )
}
