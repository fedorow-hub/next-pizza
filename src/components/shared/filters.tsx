'use client';

import React from 'react';
//import qs from 'qs';

import { Input } from '@/components/ui/input';
import { CheckboxFiltersGroup } from '@/components/shared/checkbox-filters-group';
import { Title } from './title';
import { RangeSlider } from '../ui/range-slider';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMap, useSet } from 'react-use';
import debounce from 'lodash.debounce';
import { Api } from '@/services/api-client';
import { Ingredient } from './../../../models/product';
import { FilterCheckbox } from './filter-checkbox';
import { useFilterIngredients } from '@/hooks/use-filter-ingredients';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const {ingredients, loading, onAddId, selectedIds} = useFilterIngredients();

  const items = ingredients.map((item) => ({value: String(item.id), text: item.name}));
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filters, { set }] = useMap(Object.fromEntries(searchParams.entries()));
  const [selectedIngredientsIds, { toggle }] = useSet(new Set<string>());
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>());
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>());


  const updateQueryParams = React.useMemo(
    () =>
      debounce((params) => {
        router.push(
          `?${qs.stringify(params, {
            arrayFormat: 'comma',
          })}`,
          { scroll: false },
        );
      }, 300),
    [],
  );

  React.useEffect(() => {
    updateQueryParams({
      ...filters,
      ingredients: Array.from(selectedIngredientsIds),
      sizes: Array.from(sizes),
      pizzaTypes: Array.from(pizzaTypes),
    });
  }, [filters, selectedIngredientsIds, pizzaTypes, sizes]);

  const defaultIngredients = ingredients
    ?.slice(0, 6)
    .map((o: Ingredient) => ({ text: o.name, value: o.id.toString() }));

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
        onClickCheckbox={togglePizzaTypes}
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
        onClickCheckbox={toggleSizes}
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
            onChange={(e) => set('priceFrom', e.target.value)}
            value={String(filters.priceFrom || 0)}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="30000"
            onChange={(e) => set('priceTo', e.target.value)}
            value={String(filters.priceTo || 0)}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[Number(filters.priceFrom) || 0, Number(filters.priceTo) || 1000]}
          onValueChange={([priceFrom, priceTo]) => {
            set('priceFrom', String(priceFrom || 0));
            set('priceTo', String(priceTo || 0));
          }}
        />
      </div>

      <CheckboxFiltersGroup
        name="ingredients"
        loading={loading}
        className="mt-5"
        title="Ингредиенты"
        onClickCheckbox={toggle}
        defaultItems={items.slice(0, 6)}
        items={items}
      />
    </div>
  );
};
