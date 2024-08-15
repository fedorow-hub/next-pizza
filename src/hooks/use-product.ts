import React from "react"
import { Product } from "../../models/product"
import { Api } from "@/services/api-client";

export const useProduct = (id: number) => {
    const [product, setProduct] = React.useState<Product>();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=>{
        async function fetchProduct() {
            try{
                setLoading(true);
                const prod = await Api.product.search(id); 
                setProduct(prod);
            } catch(error){
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct()
    }, [])

    return {product, loading};
}