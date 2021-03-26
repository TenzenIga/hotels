

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT ="LOGOUT";

 
  export interface ILoginSuccess {
    type: typeof LOGIN_SUCCESS,
  }

  
export const loginSuccess = () =>{
    return {
        type:LOGIN_SUCCESS
    }
}

export interface ILogOut {
  type: typeof LOGOUT
}


export const logOut = ()=>{
    return {
        type:LOGOUT
    }
}

export type AuthAction = ILoginSuccess | ILogOut; 