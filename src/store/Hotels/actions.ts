import { ISearchFormInputs } from "../../components/SearchForm/SearchForm";

export const LOAD_HOTELS = 'LOAD_HOTELS';
export const SET_HOTELS = 'SET_HOTELS';
export const FETCH_HOTELS_FAIL = 'FETCH_HOTELS_FAIL';







export interface IHotelInfo {
    location:{
        name:string
    }
    hotelId:number
    name:string
    priceAvg:number
    hotelName:string
    stars:number
    checkIn:string
    days:number
}



export interface ISetHotels {
    type: typeof SET_HOTELS
    payload:IHotelInfo[]
  }
  
export const setHotels = (dataFromServer:IHotelInfo[])=>{
    return {
        type: SET_HOTELS,
        payload: dataFromServer
    }
}


export interface IFetchingError {
    type: typeof FETCH_HOTELS_FAIL,
    payload: string
  }

export const fetchingError = (error:string)=>{
    return {
        type:FETCH_HOTELS_FAIL,
        payload:error
    }
}

export interface ILoadHotels {
    type: typeof LOAD_HOTELS,
    payload:ISearchFormInputs
}

export const loadHotels = (inputData:ISearchFormInputs)=>{
    return {
        type:LOAD_HOTELS,
        payload:inputData
    }
}

export type HotelsAction = ISetHotels | ILoadHotels | IFetchingError; 