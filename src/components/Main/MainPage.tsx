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
import { connect } from 'react-redux';
import { loadHotels } from '../../store/Hotels/actions';

const mapState = (state:IStore) =>({
    hotels:state.hotels
  });

const mapDispatch = (dispatch:Dispatch) => {
    return{
        loadHotels:bindActionCreators(loadHotels, dispatch)
    }
  }

  const connector = connect(
    mapState,
    mapDispatch
  );

function MainPage(props:any) {
    const {loadHotels} = props;
    
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
        loadHotels({location:'Moscow',date:'2021-03-24',days:'3'})
        console.log('run');
        
      },[loadHotels])

    return (
        <div className="main-page">
            <Header />
            <div className="main">
                <Sidebar />
                <div className="content container">
                    <div className="header">
                        <Breadcrumbs />
                        <div className="date">07 июля 2020</div>
                    </div>
                    <Carousel />
                    <FavoritesCount value={3} />
                    <Scrollbars style={{width:"100%", height:530}} renderThumbVertical={thumbVertical} >
                        <div className='hotels-list'>
                            <HotelCard>
                                <HotelImage />
                                <HotelInfo />
                            </HotelCard>
                            <HotelCard>
                                <HotelImage />
                                <HotelInfo />
                            </HotelCard>
                            <HotelCard>
                                <HotelImage />
                                <HotelInfo />
                            </HotelCard>
                            <HotelCard>
                                <HotelImage />
                                <HotelInfo />
                            </HotelCard>
                            <HotelCard>
                                <HotelImage />
                                <HotelInfo />
                            </HotelCard>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        </div>
    )
}

export default connector(MainPage)