import React from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { useForm } from 'react-hook-form';

import { bindActionCreators, Dispatch } from 'redux';
import { loadHotels } from '../../store/Hotels/actions';
import './SearchForm.css'
import { formatToYYYYMMDD } from '../../utils';

export interface ISearchFormInputs {
    location:string,
    date:Date | string,
    checkOut:string
    days:string
}

const mapDispatch = (dispatch:Dispatch) => {
    return{
        searchHotels:bindActionCreators(loadHotels, dispatch)
    }
  }

const connector = connect(
    null,
    mapDispatch
  );
  
type PropsFromRedux = ConnectedProps<typeof connector>;

function SearchForm(props:PropsFromRedux) {
    const {searchHotels} = props;
    const { register,  handleSubmit } = useForm<ISearchFormInputs>();

    const onSubmit = handleSubmit(({location, date, days}) =>{        
        const checkIn = new Date(date);
        const checkOut = formatToYYYYMMDD(checkIn.setDate(checkIn.getDate() + Number.parseInt(days)));
        searchHotels({location, date, checkOut, days});
    })

    return (
        <div className="container">
        <form onSubmit={onSubmit} >
            <div className="form-group">
                <label >Локация</label>
                <input type="text" name="location" ref={register({required:true})} className="form-control"/>
            </div>
            <div className="form-group">
                <label >Дата заселения</label>
                <input type="date" name="date" ref={register({required:true})} className="form-control" />
            </div>
            <div className="form-group">
                <label >Количество дней</label>
                <input type="text" name="days" ref={register({required:true})} className="form-control" />
            </div>
            <button className="btn">Найти</button>
        </form>
    </div>
    )
}


export default connector(SearchForm);