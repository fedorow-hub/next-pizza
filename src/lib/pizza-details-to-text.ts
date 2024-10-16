export const mapPizzaSize = {
  20: 'Маленькая',
  30: 'Средняя',
  40: 'Большая',
} as const;

export const mapPizzaType = {
  1: 'традиционное',
  2: 'тонкое',
} as const;

export type PizzaSizeItem = { value: string; name: string; disabled?: boolean };

export const pizzaSizes = Object.entries(mapPizzaSize).map<PizzaSizeItem>(([value, name]) => ({
  value,
  name,
}));

export const pizzaTypes = Object.entries(mapPizzaType).map<PizzaSizeItem>(([value, name]) => ({
  value,
  name,
}));

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaType = keyof typeof mapPizzaType;

export const pizzaDetailsToText = (size: PizzaSize, type: PizzaType) => {
  const textSize = mapPizzaSize[size].toLocaleLowerCase();
  const textType = mapPizzaType[type];

  return `${size} см (${textSize}), ${textType} тесто`;
};
  