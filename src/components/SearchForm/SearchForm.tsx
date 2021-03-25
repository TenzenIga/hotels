import React from 'react'
import './SearchForm.css'

export default function SearchForm() {
    return (
        <div className="container">
        <form action="">
            <div className="form-group">
                <label >Локация</label>
                <input type="text" name="location" className="form-control"/>
            </div>
            <div className="form-group">
                <label >Дата заселения</label>
                <input type="date" name="date" className="form-control" />
            </div>
            <div className="form-group">
                <label >Количество дней</label>
                <input type="text" name="days" className="form-control" />
            </div>
            <button className="btn">Найти</button>
        </form>
    </div>
    )
}
