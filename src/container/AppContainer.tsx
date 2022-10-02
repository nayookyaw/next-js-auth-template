import {FC, useContext, useEffect, useState} from 'react';

import {UserAuthContext} from '../contexts/UserAuthContext';
import Login from '../components/Login/Login';
import { UserAuthType, UserInfo } from '../types/UserAuth';

const AppContainer : FC = () => {
    const {userInfo, getUserInfo} = useContext(UserAuthContext) as UserAuthType;

    useEffect(() => {
        console.log (userInfo);
    });

    return (
        <>
            <h1>App Container</h1>
            {
                (userInfo && userInfo.token ? 
                    <div>Logged in</div>
                :
                    <Login/>
                )
            }
        </>            
    );
}

export default AppContainer;