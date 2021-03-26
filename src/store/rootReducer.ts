import { combineReducers } from "redux";

import authReducer, { IAuth } from "./Auth/reducer";
import favoritesReducer from "./Favorites/reducers";
import { IHotelInfo } from "./Hotels/actions";
import hotelsReducer, { HotelsState } from "./Hotels/reducer";

export interface IStore {
    auth:IAuth
    hotels:HotelsState
    favorites:IHotelInfo[]
}

export default combineReducers({
    auth:authReducer,
    hotels:hotelsReducer,
    favorites:favoritesReducer
})
