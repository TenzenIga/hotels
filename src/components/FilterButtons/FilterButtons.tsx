import React from 'react'
import {ReactComponent as SelectUp} from '../../assets/up.svg';
import {ReactComponent as EmptySelect} from '../../assets/empty-select.svg';
import './FilterButtons.css';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { sortFavorites } from '../../store/Favorites/actions';
import { IStore } from '../../store/rootReducer';
import { compareValues } from '../../utils';


const mapState = (state:IStore) =>({
    favorites:state.favorites
  });

const mapDispatch = (dispatch:Dispatch) => {
    return{
        sortFavorites:bindActionCreators(sortFavorites, dispatch)
    }
  }

const connector = connect(
    mapState,
    mapDispatch
  );

type PropsFromRedux = ConnectedProps<typeof connector>;


 function FilterButtons(props:PropsFromRedux) {
    const {favorites, sortFavorites} = props;
    const [sortBy, setsortBy] = React.useState('');
    const [isInc, setIsInc] = React.useState(false);
    const name = 'Рейтинг';
    const filterBtn = isInc ? <SelectUp /> : <SelectUp className='down' />
    
    const handleSort = (property:string) =>{
        let sortedHotels;
        if(isInc){
            sortedHotels = favorites.sort(compareValues(property));
            setIsInc(false)
        }else{
            sortedHotels = favorites.sort(compareValues(property, 'desc'))
            setIsInc(true)
        }
        setsortBy(property)
        sortFavorites(sortedHotels)
    }

    return (
        <div className="btn-group">
            <div className={`filter ${sortBy ==='stars' ? 'active' : ''}`} onClick={()=>handleSort('stars')} >
                <span>{name}</span>
                <div className="btn-control">
                {sortBy === 'stars' ? filterBtn : <EmptySelect />}
                </div>
            </div>
            <div className={`filter ${sortBy ==='priceAvg' ? 'active' : ''}`} onClick={()=>handleSort('priceAvg')} >
                <span>Цена</span>
                <div className="btn-control" >
                    {sortBy === 'priceAvg' ? filterBtn : <EmptySelect />}
                </div>
            </div>
        </div>
    )
}

export default connector(FilterButtons);