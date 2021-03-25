
import axios from 'axios';

import { fetchingError, HotelsAction, inputData, LOAD_HOTELS, setHotels } from '../store/Hotels/actions';

//Workaround https://github.com/redux-saga/redux-saga/issues/884
import { put, takeEvery } from "typed-redux-saga";
import * as Effects from "typed-redux-saga";
const call: any = Effects.call;


function fetchHotels(data:inputData){
        return axios.get(`http://engine.hotellook.com/api/v2/cache.json?location=${data.location}&currency=rub&checkIn=${data.date}&checkOut=2021-03-25&limit=10`)
  }

function* workLoadHotels(action:HotelsAction){
    try {
      const res = yield* call(fetchHotels, action.payload)
      console.log(res);
      
      yield put(setHotels(res.data))
    } catch (error) {
      yield put(fetchingError(error.response.data))
    }
}

 export function* watchLoadHotels(){
      yield takeEvery(LOAD_HOTELS, workLoadHotels)
  } 