'use client';

import React from 'react';
import Image from 'next/image';

import { Container } from './container';
import { SearchInput } from './search-input';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { CartButton } from './cart-button';
import { AuthModal } from './modals/auth-modal';
import { ProfileButton } from './profile-button';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ className, hasSearch = true, hasCart = true }) => {
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const searchParams = useSearchParams();

  //TODO реализовать возврат после оплаты на url с параметром 'payd'
  
  React.useEffect(()=>{
    if(searchParams.has('payd')){
      setTimeout(() => {
        toast.success('Заказ успешно оплачен! Информация отправлена на почту.');
      }, 500);      
    }
  }, []);

  //TODO реализовать удаление параметра 'payd' сразу после его сработки


  const onClickOpenAuthModal = () => setOpenAuthModal(true);

  return (
    <header className={cn('border-b border-gray-100', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" width={35} height={35} alt="Logo" />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
            </div>
          </div>
        </Link>

       {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        <div className="flex items-center gap-3">
          <AuthModal open={openAuthModal} onClose={onClickOpenAuthModal} />

          <ProfileButton onClickOpenModal={onClickOpenAuthModal} />

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};