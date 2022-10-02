import {FC, useContext, useEffect} from 'react';
import {UserAuthContext} from '../../contexts/UserAuthContext';
import {UserAuthType} from '../../types/UserAuth';

const Login : FC = () => {
    const {userInfo} = useContext(UserAuthContext) as UserAuthType;

    useEffect(() => {
        console.log (userInfo);
    }, []);

    return (
        <>
            <div>Login</div>
        </>
    )
    
}

export default Login;