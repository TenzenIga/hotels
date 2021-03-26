import { IHotelInfo } from "../Hotels/actions"
import { FavoritesAction, REMOVE_FROM_FAVORITE, SAVE_TO_FAVORITE, SORT_FAVORITES } from "./actions"


const initialState:IHotelInfo[] = []




export default function favoritesReducer(state=initialState, action:FavoritesAction ){
    switch (action.type) {
        case SAVE_TO_FAVORITE:
            return [ ...state, action.payload]
        case REMOVE_FROM_FAVORITE:
            return [...action.payload]
        case SORT_FAVORITES:
            return [...action.payload]
        default:
            return state
    }
}