import {createContext, FC, ReactNode, useEffect, useState} from 'react';
import { UserAuthType, UserInfo, DefaultUserInfo } from '../types/UserAuth';

export const UserAuthContext = createContext<UserAuthType | null>(null);

type Props = {
    children?: ReactNode
}

const UserAuthProvider: FC<Props> = ({children}) => {
    const [userInfo, setUserInfo] = useState<UserInfo>(DefaultUserInfo);

    const getUserInfo = () => {
        return userInfo;
    }

    const saveUserInfo = (userInfo : UserInfo) => {
        // const newUserInfo = userInfo; ERRROR becuase react never trigger that is changes
        const newUserInfo : UserInfo= {
            id : userInfo.id,
            name : userInfo.name,
            token : userInfo.token
        }
        setUserInfo(newUserInfo);
    }

    return <UserAuthContext.Provider value={{userInfo, getUserInfo, saveUserInfo}}>
                {children}
            </UserAuthContext.Provider>
}

export default UserAuthProvider;