import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  text?: string;
  addButton?: boolean;
  onClickEdit: VoidFunction;
}

export const DashboardHeader: React.FC<Props> = ({ className, addButton = true, text, onClickEdit }) => {
  return (
    <div className={cn('flex justify-between items-center mb-7', className)}>
      <h1 className="font-extrabold text-3xl">{text}</h1>
      {addButton? <Button onClick={onClickEdit}>Добавить</Button> : null}
    </div>
  );
};
