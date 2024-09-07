import { FormTextarea, WhiteBlock } from '@/components/shared';
import { Controller } from 'react-hook-form';

interface Props{
    totalAmount: number;
}

export const CheckoutAddressForm: React.FC<Props> = ({totalAmount }) => {
    return(
        <WhiteBlock
        className={!totalAmount ? 'opacity-50 pointer-events-none' : ''}
        title="3. Адрес доставки"
        contentClassName="p-8">
        <div className="flex flex-col gap-5">
          {/* <Controller
            control={form.control}
            name="address"
            render={({ field }) => <AddressInput onChange={field.onChange} />}
          /> */}

          <FormTextarea
            name="comment"
            className="text-base"
            placeholder="Комментарий к заказу"
            rows={5}
          />
        </div>
      </WhiteBlock>
    )
}