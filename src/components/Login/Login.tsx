import {FC, useContext, useEffect} from 'react';
import {UserAuthContext} from '../../contexts/UserAuthContext';
import {UserAuthType, UserInfo} from '../../types/UserAuth';

const Login : FC = () => {
    const {userInfo, saveUserInfo, getUserInfo} = useContext(UserAuthContext) as UserAuthType;

    useEffect(() => {
        console.log (userInfo);
    });

    const loginHandle = () => {
        let newUserInfo : UserInfo = userInfo;
        newUserInfo.token = "fdad543443";

        saveUserInfo(newUserInfo);
    }

    return (
        <>
            <button onClick={loginHandle}>Login</button>
        </>
    )
    
}

export default Login;