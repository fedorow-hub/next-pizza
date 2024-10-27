import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  isEdit?: boolean;
  loading?: boolean;
  className?: string;
  text?: string;
}

export const DashboardFormHeader: React.FC<Props> = ({ isEdit, loading, className, text }) => {
  return (
    <div className={cn('flex justify-between items-center mb-7', className)}>
      <h1 className="font-extrabold text-3xl">{isEdit ? `Изменение роли ${text}` : `Создание ${text}`}</h1>
      <Button loading={loading}>Сохранить</Button>
    </div>
  );
};
