import React from 'react'
import { useForm } from 'react-hook-form';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { loginSuccess } from '../../store/Auth/actions';
import { IStore } from '../../store/rootReducer';
import './Login.css';


const mapState = (state:IStore) =>({
    auth:state.auth
  });

const mapDispatch = (dispatch:Dispatch) => {
    return{
        login:bindActionCreators(loginSuccess, dispatch)
    }
  }

  const connector = connect(
    mapState,
    mapDispatch
  );
  
type PropsFromRedux = ConnectedProps<typeof connector>;

interface IFormInputs {
    login: string
    password: string
  }

function Login(props:PropsFromRedux) {
    const {login, auth} = props;

    const { register,errors,  handleSubmit } = useForm<IFormInputs>();
    const onSubmit = () =>{
        localStorage.setItem('isAuth', "true")
            login()
    }
    
    if(auth.isAuth){
        return <Redirect to='/' />
      }
    return (
        <div className="login">
            <div className="bg-image"></div>
            <div className="form-wrapper">
                <div className="heading">
                Simple Hotel Check
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>
                            Логин
                        </label>
                        <input
                            className="form-control"
                            name="login" 
                            ref={register({ 
                                required: "Required",
                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                                message: "invalid email address"}
                            })} />
                        <span className='error'>{errors.login && errors.login.message}</span>
                    </div>
                    <div className="form-group">
                        <label>
                            Пароль
                        </label>
                        <input type="password" className="form-control" name="password" ref={register({ pattern: {value: /^[A-Za-z0-9]+$/i, message:"Only latin characters allowed"}, minLength:{value:8, message:"Password must contain more that 8 characters "}})} />
                        <span className='error'>{errors.password && errors.password.message}</span>
                    </div>
                        <input type="submit" value="Войти" className="btn" />
                </form>
            </div>
      </div>
    )
}


export default connector(Login);