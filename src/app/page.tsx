import { Button } from "@/components/ui/button";
import {Categories, Container, Filters, ProductCard, ProductsGroupList, Title } from "@/components/shared";
import { SortPopup } from "@/components/shared/sort-popup";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold"/>      

    </Container>
    <TopBar/>

    <Container className="mt-10 pb-14">
      <div className="flex gap-[60px]">
        {/* Фильтрация */}
        <div className="w-[250px]">
          <Filters/>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductsGroupList 
              title="Пиццы"              
              products={[
                {
                  id: 1,
                  name: "Чизбургер-пицца",
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 2,
                  name: "Чизбургер-пицца",
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF112C05B1B9C193648449783C1A82.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 3,
                  name: "Чизбургер-пицца",
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 4,
                  name: "Чизбургер-пицца",
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE797033873EB1B4B77F7E70BBA37E.avif',
                  price: 550,
                  items: [{price: 550}]
                }
              ]}
              categoryId={1}/>

            <ProductsGroupList 
              title="Комбо"              
              products={[
                {
                  id: 1,
                  name: "Чизбургер-пицца",
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 2,
                  name: "Чизбургер-пицца",
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF112C05B1B9C193648449783C1A82.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 3,
                  name: "Чизбургер-пицца",
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 4,
                  name: "Чизбургер-пицца",
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE797033873EB1B4B77F7E70BBA37E.avif',
                  price: 550,
                  items: [{price: 550}]
                }
              ]}
              categoryId={2}/>
            
          </div>
        </div>
      </div>

      


    </Container>
  </>
}
