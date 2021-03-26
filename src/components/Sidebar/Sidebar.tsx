import React from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { saveToFavorite, removeFromFavorite } from '../../store/Favorites/actions';
import { IHotelInfo } from '../../store/Hotels/actions';
import { IStore } from '../../store/rootReducer';
import FilterButtons from '../FilterButtons/FilterButtons'
import Heading from '../Heading/Heading';
import HotelCard from '../HotelCard/HotelCard'
import HotelInfo from '../HotelInfo/HotelInfo';
import SearchForm from '../SearchForm/SearchForm'
import './Sidebar.css';

const mapState = (state:IStore) =>({
    favorites:state.favorites
  });

const mapDispatch = (dispatch:Dispatch) => {
    return{
        saveToFavorite:bindActionCreators(saveToFavorite, dispatch),
        removeFromFavorite:bindActionCreators(removeFromFavorite, dispatch),
    }
  }

const connector = connect(
    mapState,
    mapDispatch
  );

type PropsFromRedux = ConnectedProps<typeof connector>;

type props = PropsFromRedux;

function Sidebar(props:props) {
    const {favorites, removeFromFavorite} = props;


    const handleClick = (hotel:IHotelInfo)=>{
       const newFavoritesLsit = favorites.filter(f=>f.hotelId !== hotel.hotelId );
       removeFromFavorite(newFavoritesLsit)
    }


    return (
        <aside className="sidebar">
            <SearchForm />
            <div className="container favorite">
                <Heading text = 'Избранное' />
                    <FilterButtons />
                <div>
                {
                    favorites.map(favorite => <HotelCard key={favorite.hotelId}>
                        <HotelInfo hotel={favorite} toggleFavorite={handleClick} />
                    </HotelCard>)
                }
                </div>
            </div>
    </aside>
    )
}

export default connector(Sidebar)