
export interface Product
{
    id: number
    name: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    category: Category
    categoryId: number
    items: ProductItem[]
    ingredients: Ingredient[]
}

export interface Category {
    id: number
    name: string
}

export interface ProductItem {
    id: number
    price: number
    size: number
    pizzaType: number
    productId: number
    createdAt: Date
    updatedAt: Date
}

export interface Ingredient {
    id: number
    name: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    price: number
}