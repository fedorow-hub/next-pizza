
import React from "react";
import { Ingredient } from "../../models/product";
import { Api } from '@/services/api-client';


interface ReturnProps {
    ingredients: any[];
    loading: boolean;
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(()=>{
        async function fetchIngredients() {
            try{
                setLoading(true);
                const ingredients = await Api.ingredients.getAll(); 
                setIngredients(ingredients);
            } catch(error){
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchIngredients()
    }, [])

    return {ingredients, loading};

}