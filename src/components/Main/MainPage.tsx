import React, { HTMLAttributes } from 'react'
import { Scrollbars } from 'rc-scrollbars';

import './MainPage.css';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Sidebar from '../Sidebar/Sidebar';
import HotelCard from '../HotelCard/HotelCard';
import Header from '../Header/Header';
import HotelInfo from '../HotelInfo/HotelInfo';
import Carousel from '../Carousel/Carousel';
import HotelImage from '../HotelImage/HotelImage';
import FavoritesCount from '../FavoritesCount/FavoritesCount';
import { bindActionCreators, Dispatch } from 'redux';
import { IStore } from '../../store/rootReducer';
import { connect, ConnectedProps } from 'react-redux';
import { IHotelInfo, loadHotels } from '../../store/Hotels/actions';
import { formatToYYYYMMDD } from '../../utils';
import { removeFromFavorite, saveToFavorite } from '../../store/Favorites/actions';

const mapState = (state:IStore) =>({
    hotelsState:state.hotels,
    favorites:state.favorites
  });

const mapDispatch = (dispatch:Dispatch) => {
    return{
        loadHotels:bindActionCreators(loadHotels, dispatch),
        savetoFavorites:bindActionCreators(saveToFavorite, dispatch),
        removeFromFavorites:bindActionCreators(removeFromFavorite, dispatch)
    }
  }

const connector = connect(
    mapState,
    mapDispatch
  );

type PropsFromRedux = ConnectedProps<typeof connector>;

type props = PropsFromRedux;

function MainPage(props:props) {
  const {loadHotels, hotelsState, favorites, savetoFavorites, removeFromFavorites} = props;
    
  const  thumbVertical =({ style, ...props }: HTMLAttributes<HTMLDivElement>) => {
        const finalStyle = {
          ...style,
          cursor: 'pointer',
          width:2,
          backgroundColor: '#41522E',
        };
        return <div style={finalStyle} {...props} />;
      }

  React.useEffect(()=>{    
    const today = new Date();
    const todayFormatted = formatToYYYYMMDD(today);
    const checkOut = formatToYYYYMMDD(today.setDate(today.getDate() + 1));
    loadHotels({location:'Moscow', date: todayFormatted, checkOut, days:"1"})
  },[loadHotels])


  const handleClick = (hotel:IHotelInfo)=>{
    const isInFavorites = favorites.find(f=>{ return f.hotelId === hotel.hotelId}) !== undefined;
    
    return isInFavorites ? removeFromFavorites(favorites.filter(f=>f.hotelId !==hotel.hotelId )) : savetoFavorites(hotel)
  }
  const city = hotelsState.hotels.length > 0 ? hotelsState.hotels[0].location.name : '';
  return (
      <div className="main-page">
          <Header />
          <div className="main">
              <Sidebar />
              <div className="content container">
                  <div className="header">
                      <Breadcrumbs city={city} />
                      <div className="date">07 июля 2020</div>
                  </div>
                  <Carousel />
                  <FavoritesCount value={favorites.length} />
                  <Scrollbars style={{width:"100%", height:530}} renderThumbVertical={thumbVertical} >
                      <div className='hotels-list'>
                          {hotelsState.hotels.map((hotel:IHotelInfo) =>{
                                return <HotelCard key={hotel.hotelId}>
                                          <HotelImage />
                                          <HotelInfo hotel={hotel} toggleFavorite={handleClick} />
                                       </HotelCard>
                              }
                          )}
                      </div>
                  </Scrollbars>
              </div>
          </div>
      </div>
  )
}

export default connector(MainPage)