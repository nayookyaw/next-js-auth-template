export interface UserInfo {
    id: number;
    name: string;
    token: string;
}

export type UserAuthType = {
    userInfo: UserInfo;
    getUserInfo: () => UserInfo;
    saveUserInfo: (userInfo: UserInfo) => void;
}

export const DefaultUserInfo : UserInfo = {
    id : 0,
    name : "",
    token : ""
}