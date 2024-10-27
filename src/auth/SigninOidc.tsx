'use client';

import { useRouter } from 'next/navigation';

import { FC, useEffect } from "react";
import { signinRedirectCallback } from './user-service';

//компонент предназначен для отображения страницы перенаправления после логина
const SigninOidc: FC<{}> = () => {
    const router = useRouter();
    useEffect(()=> {
        async function signin() {
            await signinRedirectCallback();
            router.push('/');
        }
        if (typeof window !== 'undefined') {            
            signin();
        }        
    }, [router])
    return <div>Redirecting...</div>
}

export default SigninOidc;

