'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { CartButton } from './cart-button';
import { Category } from '../../../models/product';

import userManager, {loadUser, signinRedirect, signoutRedirect} from './../../auth/user-service'
import AuthProvider from "@/auth/auth-provider";
import SignInOidc from './../../auth/SigninOidc';
import { Route } from "react-router-dom";
import SignoutOidc from "@/auth/SignoutOidc";
import { Routes } from "react-router-dom";

interface Props {  
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({categories, className}) => {
  const [cartVisible, setCartVisible] = React.useState(false);

  loadUser();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setCartVisible(true);
      } else {
        setCartVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10')}>
      <Container className="flex items-center justify-between ">
        <Categories items={categories}/>
        <div className="flex items-center">
          <SortPopup />

         {/*  <div>
            <button onClick={() => signinRedirect()}>Login</button>
            <AuthProvider userManager={userManager}>
              <Routes>
                <Route path="/signout-oidc" Component={SignoutOidc}/>
                <Route path="/signin-oidc" Component={SignInOidc}/>
              </Routes>
            </AuthProvider>

          </div> */}
          <CartButton
            className={cn(
              'transition-all',
              !cartVisible ? 'invisible w-0 p-0 opacity-0' : 'visible ml-5 opacity-100',
            )}
          />
        </div>
      </Container>
    </div>
  );
};
