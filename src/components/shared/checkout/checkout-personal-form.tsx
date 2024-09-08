import { CheckoutItem, CheckoutItemSkeleton, FormInput, WhiteBlock } from '@/components/shared';
import { getCartItemsDetails } from '@/lib';
import { CartStateItem } from '@/lib/get-cart-details';
import { PizzaSize, PizzaType } from '@/lib/pizza-details-to-text';
import { Trash2 } from 'lucide-react';

interface Props{
    className?: string;
}

export const CheckoutPresonalForm: React.FC<Props> = ({className }) => {
    return(
        <WhiteBlock
            title="2. Персональная информация"
            className={className}
            contentClassName="p-8">
            <div className="grid grid-cols-2 gap-5">
                <FormInput name="firstName" className="text-base" placeholder="Имя" />
                <FormInput name="lastName" className="text-base" placeholder="Фамилия" />
                <FormInput name="email" className="text-base" placeholder="E-Mail" />
                <FormInput name="phone" className="text-base" placeholder="Телефон" /> {/* TODO использовать react-imask*/}
            </div>
        </WhiteBlock>
    )
}
