'use client'

import { useProduct } from "@/hooks/use-product";
import { ChoosePizzaForm } from "./choose-pizza-form";
import { ChooseProductForm } from "./choose-product-form";
import { useRouter } from 'next/navigation';
import { Product } from "../../../models/product";

interface Props {
    product: Product;
    onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({product, onSubmit: _onSubmit}) => {  
     
    const isPizzaForm = Boolean(product?.productItems[0].pizzaType);

    const onCloseModal = () => {
        _onSubmit?.();
    };

    if(isPizzaForm && product){
        return (
            <ChoosePizzaForm
                imageUrl={product.imageUrl}
                name={product.name}
                items={product.productItems}
                onClickAdd={onCloseModal}
                ingredients={product.ingredients}
            />
        );
    }

    if(product){
        return <ChooseProductForm
        imageUrl={product.imageUrl}
        name={product.name}
        items={product.productItems}
        onClickAdd={onCloseModal}
        />
    }    
}
