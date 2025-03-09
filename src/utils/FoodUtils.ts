import { Product } from "../types";

export const getPriceValue = (price: string): number => {
  return parseFloat(price.replace(/[^0-9.]/g, ""));
};

export const filterAndSortData = (
  data: Product[],
  category: string | null
): Product[] => {
  const filteredData = category
    ? data.filter((item) => item.category === category)
    : [...data];

  return filteredData;
};
