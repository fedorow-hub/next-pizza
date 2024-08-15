import React from "react"
import { Category } from "../../models/product"
import { Api } from "@/services/api-client";

export const useCategories = () => {
    const [categories, setCategories] = React.useState<Category[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=>{
        async function fetchCategories() {
            try{
                setLoading(true);
                const cat = await Api.categories.search(); 
                setCategories(cat);
            } catch(error){
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchCategories()
    }, [])

    return {categories, loading};
}