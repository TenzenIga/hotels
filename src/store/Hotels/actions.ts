export const LOAD_HOTELS = 'LOAD_HOTELS';
export const SET_HOTELS = 'SET_HOTELS';
export const FETCH_HOTELS_FAIL = 'FETCH_HOTELS_FAIL';





export type inputData = {
    location:string
    date:string
    days:string
}

export interface IHotelInfo {
    name:string
    priceAvg:number
    hotelName:string
    stars:number
    checkIn:string
    days:number
}



export interface setHotels {
    type: typeof SET_HOTELS
    payload:IHotelInfo[]
  }
  
export const setHotels = (dataFromServer:IHotelInfo[])=>{
    return{
        type: SET_HOTELS,
        payload: dataFromServer
    }
}


export interface fetchingError {
    type: typeof FETCH_HOTELS_FAIL,
    payload: string
  }

export const fetchingError = (error:string)=>{
    return{
        type:FETCH_HOTELS_FAIL,
        payload:error
    }
}

export interface loadHotels {
    type: typeof LOAD_HOTELS,
    payload:inputData
}

export const loadHotels = (inputData:inputData)=>{
    return{
        type:LOAD_HOTELS,
        payload:inputData
    }
}

export type HotelsAction = setHotels | loadHotels | fetchingError; 