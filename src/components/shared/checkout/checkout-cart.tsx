import { CheckoutItem, CheckoutItemSkeleton, WhiteBlock } from '@/components/shared';
import { getCartItemsDetails } from '@/lib';
import { CartStateItem } from '@/lib/get-cart-details';
import { PizzaSize, PizzaType } from '@/lib/pizza-details-to-text';
import { Trash2 } from 'lucide-react';

interface Props{
    items: CartStateItem[];
    onClickCountButton: (id: number, quantity: number, type: 'plus'| 'minus') => void;
    removeCartItem: (id: number) => void;
    className?: string;
    totalAmount: number;
    loading: boolean;
}


export const CheckoutCart: React.FC<Props> = ({loading, totalAmount, items, className, onClickCountButton, removeCartItem}) => {
    return(
        <WhiteBlock className={className}
                title="1. Корзина"
                endAdornment={
                  totalAmount > 0 && (
                    <button className="flex items-center gap-3 text-gray-400 hover:text-gray-600">
                      <Trash2 size={16} />
                      Очистить корзину
                    </button>
                  )
                }>
                <div className="flex flex-col gap-5">
                {loading
                    ? [...Array(4)].map((_, index) => <CheckoutItemSkeleton key={index} />)
                    : items.map((item) => (
                        <CheckoutItem
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            imageUrl={item.imageUrl}
                            disabled={item.disabled} //TODO не работает
                            details={
                              getCartItemsDetails(
                              item.ingredients, 
                              item.pizzaType as PizzaType, 
                              item.size as PizzaSize)
                            }
                            price={item.price}
                            quantity={item.quantity}
                            onClickRemove={() => removeCartItem(item.id)}
                            onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)
                            }
                        />
                      ))
                }
                </div>

                {!totalAmount && <p className="text-center text-gray-400 p-10">Корзина пустая</p>}
              </WhiteBlock>
    )
}
