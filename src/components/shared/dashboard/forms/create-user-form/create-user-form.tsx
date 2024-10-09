'use client';

import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormInput } from '@/components/shared/form/form-input';
//import type { User, UserRole } from '@prisma/client';
import { CreateUserFormSchema, CreateUserFormValues } from './constants';
import { useRouter, useParams } from 'next/navigation';
//import { createUser, updateUser } from '@/app/actions';
import toast from 'react-hot-toast';
import { DashboardFormHeader } from '../../dashboard-form-header';
import { createUser, updateUser } from '@/services/user';
import { FormSelect } from '@/components/shared/form/form-select';
import { User, UserRole } from '../../../../../../models/user';

interface Props {
  values?: User;
  onClickAdd: VoidFunction;
}

export const CreateUserForm: React.FC<Props> = ({ values, onClickAdd }) => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const form = useForm<CreateUserFormValues>({
    defaultValues: {
      fullName: values?.fullName || '',
      email: values?.email || '',
      login: values?.login || '',
      password: values?.password || '',
      role: values?.role?.toString() || '',
    },
    resolver: zodResolver(CreateUserFormSchema),
  });

  const onSubmit: SubmitHandler<CreateUserFormValues> = async (data) => {    
    try {
      setLoading(true);
      const values2: User = {
        ...data,
        role: Number(data.role) as UserRole,
        id: values?.id || 0
      };

     /*  if (params.id) {
        debugger
        await updateUser(+params.id, values2);
      } else {
        debugger
        await createUser(values2);
        router.push('/dashboard/users');
      } */

      if (values2.id) {
        await updateUser(values2.id, values2);
      } else {
        await createUser(values2);
        router.push('/dashboard/users');
      }

    } catch (error) {
      console.log('Error [CREATE_USER]', error);
      toast.error('Произошла ошибка');
    } finally {
      setLoading(false);
    }
    onClickAdd?.();
    
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DashboardFormHeader text={'пользователя'} isEdit={!!values} loading={loading} />
        <div className="border shadow-sm rounded-lg grid grid-cols-2 gap-5 p-5">
          <FormInput name="fullName" label="ФИО" required />
          <FormInput name="email" label="E-Mail" required />
          <FormInput name="login" label="Логин" required />
          <FormSelect
            name="role"
            label="Роль"
            placeholder="Выберите роль пользователя..."
            items={[
              {
                value: '0',
                label: 'Обычный пользователь',
              },
              {
                value: '1',
                label: 'Администратор',
              },
            ]}
          />
          <FormInput name="password" label="Пароль" required />
        </div>
      </form>
    </FormProvider>
  );
};
