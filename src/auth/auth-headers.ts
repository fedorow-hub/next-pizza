'use-client'
//функция для помещение полученного токена в локальное хранилище
export function setAuthHeader(token: string | null | undefined){
    if (typeof window !== "undefined") {
        localStorage.setItem("token", token ? token : "");
    }
}