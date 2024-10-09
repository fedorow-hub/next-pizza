'use client';

import {useNavigate} from 'react-router-dom';

import { FC, useEffect } from "react";
import { signoutRedirectCallback } from './user-service';

const SignoutOidc: FC<{}> = () => {
    const history = useNavigate();
    useEffect(()=> {
        async function signoutAsync() {
            await signoutRedirectCallback();
            history('/')
        }
        signoutAsync();
    }, [history]);
    return <div>Redirecting...</div>
}

export default SignoutOidc;