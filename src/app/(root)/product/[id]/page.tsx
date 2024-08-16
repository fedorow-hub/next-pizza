'use client'

import { Container, GroupVariants, ProductImage, Title } from "@/components/shared";
import { useProduct } from "@/hooks/use-product";
import { notFound } from "next/navigation";

export default function ProductPage({params: {id}}: {params: {id: string}}) {
    const {product, loading} = useProduct(Number(id));

    if(!loading && !product){
        return notFound();
    }

    return <Container className="flex flex-col my-10">
        <div className="flex flex-1">
            <ProductImage imageUrl={product?.imageUrl} size={40} className=""/>
            <div className="w-[490px] bg-[#F7F6F5] p-7">
                <Title text={product?.name} size="md" className="font-extrabold mb-1"/>
                <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores illo minus beatae! Ad, nostrum vero modi exercitationem nesciunt fugiat quo iusto et error alias molestias at sunt, voluptatum id numquam.</p>
                <GroupVariants 
                    selectedValue="2"
                    items={[
                        {
                            name: 'Маленькая',
                            value: '1'
                        },
                        {
                            name: 'Средняя',
                            value: '2'
                        },
                        {
                            name: 'Большая',
                            value: '3',
                            disabled: true
                        },
                    ]}/>
            </div>
        </div>
    </Container>

}