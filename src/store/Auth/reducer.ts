
import { AuthAction, LOGIN_SUCCESS, LOGOUT } from "./actions";

export interface IAuth {
    isAuth:boolean
}

const initialState:IAuth = {
    isAuth:localStorage.getItem('isAuth') ? true : false,
}


export default function authReducer(state=initialState, action:AuthAction){
    switch (action.type){
        case LOGIN_SUCCESS:
                return {isAuth:true}
        case LOGOUT:
            return { isAuth:false }
        default:
            return state;
        }
}