'use client'

import React from 'react';
import './globals.css';
import { Providers } from './providers';
import { Nunito } from 'next/font/google';
import "@uploadthing/react/styles.css";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import userManager, {loadUser} from '@/auth/user-service';
import AuthProvider from '@/auth/auth-provider';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  loadUser();
  return (
    <html className={nunito.variable} lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body>
        <AuthProvider userManager={userManager}>
          <Providers>{children}</Providers>
         {/*  <Router >
            <Routes>
              <Route path="/" element={<Providers>{children}</Providers>}/>
              <Route path="/signout-oidc" Component={SignoutOidc}/>
              <Route path="/signin-oidc" Component={SigninOidc}/>
            </Routes>
          </Router> */}
        </AuthProvider>
      </body>
    </html>
  );
}