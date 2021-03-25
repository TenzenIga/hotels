

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT ="LOGOUT";

  export interface logOut {
    type: typeof LOGOUT
  }
  
  export interface LoginSuccess {
    type: typeof LOGIN_SUCCESS,
  }

  
export const loginSuccess = () =>{
    return {
        type:LOGIN_SUCCESS
    }
}



export const logOut = ()=>{
    return {
        type:LOGOUT
    }
}

export type AuthAction = LoginSuccess | logOut; 