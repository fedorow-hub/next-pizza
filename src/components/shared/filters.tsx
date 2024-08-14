'use client';

import React from 'react';

import { Input } from '@/components/ui/input';
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group';
import { Title } from './title';
import { RangeSlider } from '../ui/range-slider';
import { useQueryFilters, useIngredients, useFilters} from '@/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  
  const {ingredients, loading} = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  }

  return (
    <div className={className}>
      <Title
        text="Фильтрация"
        size="sm"
        className="mb-5 font-bold pb-4 border-b border-b-neutral-100"
      />

      <CheckboxFiltersGroup
        name="pizzaTypes"
        className="mb-5"
        title="Тип теста"
        loading={loading}
        onClickCheckbox={filters.setPizzaTypes}   
        selected={filters.pizzaTypes}     
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        name="sizes"
        className="mb-5"
        title="Размеры"
        loading={loading}
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />

      <div className="mt-10 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
            value={String(filters.prices.priceFrom)}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="30000"
            onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
            value={String(filters.prices.priceTo)}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[Number(filters.prices.priceFrom) || 0, Number(filters.prices.priceTo) || 1000]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        name="ingredients"
        loading={loading}
        className="mt-5"
        title="Ингредиенты"
        onClickCheckbox={filters.setSelectedIngredients}
        defaultItems={items.slice(0, 6)}
        items={items}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
