import { IHotelInfo } from "../Hotels/actions";

export const SAVE_TO_FAVORITE = 'SAVE_TO_FAVORITE'; 
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
export const SORT_FAVORITES = 'SORT_FAVORITES';







export interface ISaveToFavorite {
    type: typeof SAVE_TO_FAVORITE
    payload:IHotelInfo
  }

export const saveToFavorite = (hotel:IHotelInfo)=>{
    return {
        type:SAVE_TO_FAVORITE,
        payload:hotel
    }
}

export interface IRemoveFromFavorite {
    type: typeof REMOVE_FROM_FAVORITE
    payload:IHotelInfo[]
}

export const removeFromFavorite = (favorites:IHotelInfo[]) =>{
    return {
        type:REMOVE_FROM_FAVORITE,
        payload:favorites
    }
}

export interface ISortFavorites {
    type: typeof SORT_FAVORITES
    payload:IHotelInfo[]
}

export const sortFavorites = (sortedHotels:IHotelInfo[])=>{
    return {
        type:SORT_FAVORITES,
        payload:sortedHotels
    }
}

export type FavoritesAction = ISaveToFavorite | IRemoveFromFavorite | ISortFavorites; 