import {FC} from 'react';

import UserAuthProvider from '../contexts/UserAuthContext';
import Login from '../components/Login/Login';

const AppContainer : FC = () => {
    return (
        <UserAuthProvider>
            <h1>App Container</h1>
            <button>Login</button>
            
            <Login/>
        </UserAuthProvider>
    );
}

export default AppContainer;