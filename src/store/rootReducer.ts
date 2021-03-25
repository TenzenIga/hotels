import { combineReducers } from "redux";

import authReducer, { IAuth } from "./Auth/reducer";
import hotelsReducer from "./Hotels/reducer";

export interface IStore {
    auth:IAuth
    hotels:any[]
}

export default combineReducers({
    auth:authReducer,
    hotels:hotelsReducer
})
