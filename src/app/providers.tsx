
import React from 'react';
import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
 /*  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  } */

  return (
    <>
      {children}
      <NextTopLoader />
      <Toaster />
    </>
  );
};
