import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Indoor Plants",
  },
  {
    _id: uuid(),
    categoryName: "Low Light Plants",
  },
  {
    _id: uuid(),
    categoryName: "Succulents",
  },
  {
    _id: uuid(),
    categoryName: "Flowering Plants",
  },
  {
    _id: uuid(),
    categoryName: "Air-Purifying Plants",
  },
];
