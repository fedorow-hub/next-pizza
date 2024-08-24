
export interface Product
{
    id: number
    name: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    category: Category
    categoryId: number
    productItems: ProductItem[]
    ingredients: Ingredient[]
}

export interface Category {
    id: number
    name: string
    products: Product[]
}

export interface ProductItem {    
    id: number
    price: number
    size: number
    pizzaType: number
    product: Product   
}

export interface Ingredient {
    id: number
    name: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    price: number
}