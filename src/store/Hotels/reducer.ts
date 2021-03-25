import { IHotelInfo, SET_HOTELS, FETCH_HOTELS_FAIL, LOAD_HOTELS, HotelsAction } from "./actions"


interface HotelsState {
    hotels:IHotelInfo[],
    loading:boolean
    error:null | string
}

const initialState:HotelsState = {
    hotels:[],
    loading:false,
    error:null
}




export default function hotelsReducer(state=initialState, action:HotelsAction ){
    switch (action.type) {
        case LOAD_HOTELS:
            return { ...state, loading:true, error:null}
        case SET_HOTELS:
            return {...state, loading:false, hotels:action.payload}
        case FETCH_HOTELS_FAIL:
            return {...state, loading:false, hotels:[], error:action.payload}
        default:
            return state
    }
}