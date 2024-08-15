'use client'

import {Container, Filters, ProductsGroupList, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";
import React from "react";
import { useCategories} from '@/hooks';

export default function Home() {
  const {categories, loading} = useCategories();
  
  

  return <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold"/>      

    </Container>
    <TopBar categories={categories.filter((category) => category.products?.length > 0)}/>

    <Container className="mt-10 pb-14">
      <div className="flex gap-[60px]">
        {/* Фильтрация */}
        <div className="w-[250px]">
          <Filters/>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            {
              categories.map((category) => (
                category.products.length > 0 && (
                  <ProductsGroupList 
                    key={category.id}
                    title={category.name}   
                    categoryId={category.id}          
                    items={category.products}
                  />
              )                    
            ))}
          </div>
        </div>
      </div>
    </Container>
  </>
}
