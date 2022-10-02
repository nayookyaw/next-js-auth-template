import {FC, useContext, useEffect} from 'react';

import {UserAuthContext} from '../contexts/UserAuthContext';
import Login from '../components/Login/Login';
import { UserAuthType } from '../types/UserAuth';

const AppContainer : FC = () => {
    const {userInfo} = useContext(UserAuthContext) as UserAuthType;

    useEffect(() => {
        console.log ("app container");
        console.log (userInfo);
    }, []);

    return (
        <>
            <h1>App Container</h1>
            <button>Login</button>

            <Login/>
        </>            
    );
}

export default AppContainer;