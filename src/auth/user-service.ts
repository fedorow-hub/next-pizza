'use client';

import { User, UserManager, UserManagerSettings, WebStorageStateStore } from "oidc-client-ts";
import { setAuthHeader } from "./auth-headers";

//задаются настройки для получения токена
const userManagerSettings: UserManagerSettings = {
    client_id: 'pizza-web-api', //идентификатор клиента из сервиса авторизации (файл Configuration)
   
    redirect_uri: 'http://localhost:3000/signin-oidc',
    response_type: 'code',
    /* scope: 'openid profile PizzaWebAPI', */
    scope: 'openid profile PizzaWebAPI',
    authority: 'https://localhost:7010/', //адрес сервиса авторизации
    post_logout_redirect_uri: 'http://localhost:3000/signout-oidc',
    //userStore: new WebStorageStateStore({ store: window.localStorage }), // Хранилище для сессий
}

const userManager = new UserManager(userManagerSettings);

let user: User | null = null;

export async function loadUser() {
    user = await userManager.getUser();
    //console.log('User: ', user);
    const token = user?.access_token;
    setAuthHeader(token);
    return user;
}

export const signinRedirect = () => userManager.signinRedirect();

export const signinRedirectCallback = () => 
    userManager.signinRedirectCallback();

export const signoutRedirect = async (args?: any) => {
    try {
        await userManager.clearStaleState();
        await userManager.removeUser();
        await userManager.signoutRedirect({
            id_token_hint: user?.id_token // Где `user` – текущий пользователь
        });
    } catch (error) {
        console.error("Logout error: ", error);
    }
};

export const signoutRedirectCallback = () => {
    userManager.clearStaleState();
    userManager.removeUser();
    return userManager.signoutRedirectCallback();
}


export default userManager;