'use client';

import { CheckoutSidebar, CheckoutPresonalForm, CheckoutAddressForm } from "@/components/shared";
import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { FormProvider, useForm } from 'react-hook-form';
import { useCart } from "@/hooks";
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutCart } from "@/components/shared";
import { orderFormSchema, TFormOrderData } from "@/components/shared/checkout/checkout-form-schema";
import React from "react";
import toast from "react-hot-toast";
import { createOrder } from "@/services/order";
import { CreateCategoryForm } from "@/components/shared/dashboard/forms/create-category-form/create-category-form";
import { CreateIngredientForm } from "@/components/shared/dashboard/forms/create-ingredient-form/create-ingredient-form";
import { CreateProductForm } from "@/components/shared/dashboard/forms/create-product-form/create-product-form";
import { CreateProductItemForm } from "@/components/shared/dashboard/forms/create-product-item-form/create-product-item-form";
import { CreateUserForm } from "@/components/shared/dashboard/forms/create-user-form/create-user-form";
import { DashboardMenu } from "@/components/shared/dashboard/dashboard-menu";

export default function AdminPage() {
  /* const { totalAmount, items, loading, updateItemQuantity, removeCartItem } = useCart(true);
  const [submitting, setSubmitting] = React.useState(false);

  const form = useForm<TFormOrderData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const value = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, value);
  };

  const onSubmit = async (data: TFormOrderData) => {
    try {
      setSubmitting(true);      

      const url = await createOrder(data);

      toast.error('Заказ успешно оформлен! 📝 Переход на оплату...', {
        icon: '✅',
      });

      if (url) {
        location.href = url;
      }
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      return toast.error('Не удалось создать заказ', {
        icon: '❌',
      });
    }
  }; */

  return (
    <Container className="mt-10">
      <Title text="Страница администратора" className="font-extrabold mb-8 text-[36px]" />

        <DashboardMenu/>

        {/* <CreateCategoryForm />

        <CreateIngredientForm />

        <CreateProductForm />

        <CreateProductItemForm products={[]}/>

        <CreateUserForm /> */}
    
      {/* <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
                <CheckoutCart 
                    onClickCountButton={onClickCountButton} 
                    removeCartItem={removeCartItem}
                    items={items}
                    loading={loading}
                    totalAmount={totalAmount}
                />

                <CheckoutPresonalForm className={loading ? 'opacity-40 pointer-events-none' : ''} />

                <CheckoutAddressForm className={loading ? 'opacity-40 pointer-events-none' : ''} />

            </div>
            <div className="w-[450px]">
              <CheckoutSidebar
                totalAmount={totalAmount}
                //submitting={submitting}
                loading={loading || submitting}
              />
            </div>
          </div>
        </form>
      </FormProvider> */}
    </Container>
  );
}
