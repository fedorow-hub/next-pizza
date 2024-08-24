import { Ingredient, ProductItem } from "./product"

export interface Cart
{
    id: number
    totalAmount: number    
    cartItems: CartItem[]
}

export interface CartItem
{
    id: number
    imageUrl: string
    createdAt: Date
    productItem: ProductItem
    ingredients: Ingredient[]
    quantity: number
}