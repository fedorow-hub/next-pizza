//import { useSession } from 'next-auth/react';
import React from 'react';
import { Button } from '../ui/button';
import { CircleUser } from 'lucide-react';
import Link from 'next/link';
import { User } from 'lucide-react';

interface Props {
  onClickOpenModal?: VoidFunction;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({ className, onClickOpenModal }) => {
  //const { data: session } = useSession();

  return (
    <div className={className}>
      {false ? (
        <Link href="/profile">
          <Button variant="secondary" className="flex items-center gap-2">
            <CircleUser size={18} />
            Профиль
          </Button>
        </Link>
      ) : (
        <Button onClick={onClickOpenModal} variant="outline">
          <User size ={16}/>
          Войти
        </Button>
      )}
    </div>
  );
};
