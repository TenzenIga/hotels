import React from 'react'
import FilterButtons from '../FilterButtons/FilterButtons'
import Heading from '../Heading/Heading';
import HotelCard from '../HotelCard/HotelCard'
import HotelInfo from '../HotelInfo/HotelInfo';
import SearchForm from '../SearchForm/SearchForm'
import './Sidebar.css';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <SearchForm />
            <div className="container favorite">
                <Heading text = 'Избранное' />
                <FilterButtons />
                <HotelCard>
                    <HotelInfo />
                </HotelCard>
            </div>
    </aside>
    )
}
