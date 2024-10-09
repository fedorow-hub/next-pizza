'use client';

import { UserManager, UserManagerSettings, WebStorageStateStore } from "oidc-client";
import { setAuthHeader } from "./auth-headers";

const userManagerSettings: UserManagerSettings = {
    client_id: 'pizza-web-api', //идентификатор клиента из сервиса авторизации (файл Configuration)
    redirect_uri: 'http://localhost:3000/signin-oidc',
    response_type: 'code',
    scope: 'openid profile PizzaWebAPI',
    authority: 'https://localhost:7245/', //адрес сервиса авторизации
    post_logout_redirect_uri: 'http://localhost:3000/signout-oidc',
    //userStore: new WebStorageStateStore({ store: window.localStorage }), // Хранилище для сессий
}

const userManager = new UserManager(userManagerSettings);

export async function loadUser() {
    const user = await userManager.getUser();
    console.log('User: ', user);
    const token = user?.access_token;
    setAuthHeader(token);
}

export const signinRedirect = () => userManager.signinRedirect();

export const signinRedirectCallback = () => 
    userManager.signinRedirectCallback();

export const signoutRedirect = (args?: any) => {
    userManager.clearStaleState();
    userManager.removeUser();
    return userManager.signoutRedirect();
}

export const signoutRedirectCallback = () => {
    userManager.clearStaleState();
    userManager.removeUser();
    return userManager.signoutRedirectCallback();
}

export default userManager;