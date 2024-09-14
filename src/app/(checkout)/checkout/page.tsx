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
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { createOrder } from "@/services/order";

/* import { CartItem } from '@/components/shared/cart-item';
import { CartSidebar } from '@/components/shared/cart-sidebar';
import { Container } from '@/components/shared/container';
import { CartItemSkeleton } from '@/components/shared/skeletons/cart-item-skeleton';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { Title } from '@/components/shared/title';
import { WhiteBlock } from '@/components/shared/white-block';
import { useCart } from '@/hooks/use-cart';
import { Trash2 } from 'lucide-react';
import { TFormOrderData, orderFormSchema } from '@/components/shared/schemas/order-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput, FormTextarea } from '@/components/shared/form';
import { AdressInput } from '@/components/shared/adress-input';
import { createOrder } from '@/app/actions';
import { useSession } from 'next-auth/react';
import { Api } from '@/services/api-client'; */



export default function CheckoutPage() {
  const { totalAmount, items, loading, updateItemQuantity, removeCartItem } = useCart(true);
  const [submitting, setSubmitting] = React.useState(false);
  const { data: session } = useSession();

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

  /* React.useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data.fullName.split(' ');

      form.setValue('firstName', firstName);
      form.setValue('lastName', lastName);
      form.setValue('email', data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session]); */

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
  };

  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />
    
      <FormProvider {...form}>
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
      </FormProvider>
    </Container>
  );
}
