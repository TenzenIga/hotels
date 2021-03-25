import React from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { logOut } from '../../store/Auth/actions';
import { IStore } from '../../store/rootReducer';
import Heading from '../Heading/Heading';
import './Header.css';

const mapState = (state:IStore) =>({
    auth:state.auth
  });

const mapDispatch = (dispatch:Dispatch) => {
    return{
        logOut:bindActionCreators(logOut, dispatch)
    }
  }

  const connector = connect(
    mapState,
    mapDispatch
  );
  
type PropsFromRedux = ConnectedProps<typeof connector>;

type props = PropsFromRedux;

function Header(props:props) {
    const {logOut} = props;

    const handleLogOut = ()=> {
        localStorage.removeItem('isAuth');
        logOut();
    }

    return (
        <header>
            <Heading text = 'Simple Hotel Check' />
            <button onClick={handleLogOut} className="logout">Выйти</button>
        </header>
    )
}


export default connector(Header);