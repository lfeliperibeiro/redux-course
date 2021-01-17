import React from 'react';
import logo from '../../assets/profile.png';
import { useSelector, useDispatch} from 'react-redux'

import './index.css';
import {StoreState} from "../../store/createStore";
import {signInRequest} from "../../store/modules/auth/actions";

const SignIn: React.FC = () => {
    const { loadingSignInRequest } = useSelector((state: StoreState) => state.auth);
    const dispatch = useDispatch();
    return (
        <div className="sign-in-page">
            <img src={logo} alt={logo}/>
            <input type="text" defaultValue="test@email.com"/>
            <input type="password" defaultValue="12345678"/>
            <button onClick={() => dispatch(signInRequest({email: 'test@email.com', password: '12345678'}))}>
                {loadingSignInRequest ? 'Carregando...' : 'Entrar'}</button>
        </div>
    );
}

export default SignIn
