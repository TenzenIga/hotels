import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
    Redirect,
    Route,
    RouteProps,
} from 'react-router-dom';
import { IStore } from '../../store/rootReducer';


const mapState = (state: IStore) => ({
  isAuth: state.auth.isAuth
});

const connector = connect(
  mapState,
  { }
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & RouteProps & {

};

const PrivateRoute: React.FC<Props> = props => {
    const { isAuth, ...rest } = props;

    return ( !isAuth ? <Redirect to="/login" /> :
      <Route {...rest} />
    );
};

export default connector(PrivateRoute);
