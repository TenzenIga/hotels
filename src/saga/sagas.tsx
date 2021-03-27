
import axios from 'axios';

import { fetchingError, IHotelInfo, LOAD_HOTELS, setHotels } from '../store/Hotels/actions';
import { ISearchFormInputs } from '../components/SearchForm/SearchForm';

//Workaround https://github.com/redux-saga/redux-saga/issues/884
import { put, takeEvery } from "typed-redux-saga";
import * as Effects from "typed-redux-saga";
const call: any = Effects.call;


function fetchHotels(data:ISearchFormInputs){
    return axios.get(`https://engine.hotellook.com/api/v2/cache.json?location=${data.location}&currency=rub&checkIn=${data.date}&checkOut=${data.checkOut}&limit=10`)
}

function* workLoadHotels(action:any){
    try {
      const res = yield* call(fetchHotels, action.payload)
      const hotels = res.data.map((hotel:IHotelInfo)=>{
        return {...hotel, checkIn:action.payload.date, days:action.payload.days}
      })
      yield put(setHotels(hotels))
    } catch (error) {
      yield put(fetchingError(error.response.data))
    }
}

 export function* watchLoadHotels(){
      yield takeEvery(LOAD_HOTELS, workLoadHotels)
  } 