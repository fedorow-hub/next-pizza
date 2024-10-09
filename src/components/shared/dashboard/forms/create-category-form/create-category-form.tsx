'use client';

import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormInput } from '@/components/shared/form/form-input';
import { CreateCategoryFormSchema, CreateCategoryFormValues } from './constants';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { DashboardFormHeader } from '../../dashboard-form-header';
import { createCategory, updateCategory } from '@/services/categories';
import { Category } from '../../../../../../models/product';

interface Props {
  values?: Category;
  onClickAdd: VoidFunction;
}

export const CreateCategoryForm: React.FC<Props> = ({ values, onClickAdd }) => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const form = useForm<CreateCategoryFormValues>({
    defaultValues: {
      name: values?.name || '',
    },
    resolver: zodResolver(CreateCategoryFormSchema),
  });

  const onSubmit: SubmitHandler<CreateCategoryFormValues> = async (data) => {
    try {
      setLoading(true);

      const values2: Category = {
        ...data,
        name: data.name,
        id: values?.id || 0,
        products: []
      };

      /* if (params.id) {
        await updateCategory(+params.id, data.name);
      } else {
        await createCategory(data.name);
        router.push('/dashboard/categories');
      } */

      if (values2.id) {
        await updateCategory(values2.id, values2);
      } else {
        await createCategory(values2);
        router.push('/dashboard/categories');
      }

    } catch (error) {
      console.log('Error [CREATE_CATEGORY]', error);
      toast.error('Произошла ошибка');
    } finally {
      setLoading(false);
    }
    onClickAdd?.();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DashboardFormHeader text={'категории'} isEdit={!!values} loading={loading} />
        <div className="border shadow-sm rounded-lg grid grid-cols-2 gap-5 p-5">
          <FormInput name="name" label="Название категории" required />
        </div>
      </form>
    </FormProvider>
  );
};
