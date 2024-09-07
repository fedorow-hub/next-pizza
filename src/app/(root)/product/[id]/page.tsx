'use client'

import { Container, ProductForm } from "@/components/shared";
import { useProduct } from "@/hooks/use-product";
import { notFound } from "next/navigation";

export default function ProductPage({params: {id}}: {params: {id: string}}) {
    const {product, loading} = useProduct(Number(id)); 

    if(!loading && !product){
        return notFound();
    }
    
    if(product) return (
        <Container className="flex flex-col my-10">            
            <ProductForm product={product}/>
        </Container>
    )

    return<></>
}