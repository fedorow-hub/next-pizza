
export interface Product
{
    Id: number
    Name: string
    ImageUrl: string
    CreatedAt: Date
    UpdatedAt: Date
    //Category: Category
    CategoryId: number
    Items: ProductItem[]
    Ingredients: Ingredient[]
}

interface Category {
    Id: number
    Name: string
}

interface ProductItem {
    Id: number
    Price: number
    Size: number
    PizzaType: number
    ProductId: number
    CreatedAt: Date
    UpdatedAt: Date
}

export interface Ingredient {
    Id: number
    Name: string
    ImageUrl: string
    CreatedAt: Date
    UpdatedAt: Date
    Price: number
}