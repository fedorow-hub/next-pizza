'use client';

import { useRouter } from 'next/navigation';

import { FC, useEffect } from "react";
import { signoutRedirectCallback } from './user-service';

//компонент предназначен для отображения страницы перенаправления после вылогинивания
const SignoutOidc: FC<{}> = () => {
    const router = useRouter();
    useEffect(()=> {
        async function signout() {
            await signoutRedirectCallback();
            router.push('/');
        }
        signout();
    }, [router]);
    return <div>Redirecting...</div>
}

export default SignoutOidc;