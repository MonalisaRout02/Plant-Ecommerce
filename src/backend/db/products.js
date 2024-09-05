import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(), // Generate a unique ID for each product
    name: "Monstera Deliciosa",
    price: 25.99,
    category: "Indoor Plants",
    imgUrl: "./assets/Products/1.png",
    rating: 4.5, // Rating out of 5
  },
  {
    _id: uuid(),
    name: "Fiddle Leaf Fig",
    price: 35.99,
    category: "Indoor Plants",
    imgUrl: "./assets/Products/2.png",
    rating: 4.7,
  },
  {
    _id: uuid(),
    name: "Snake Plant",
    price: 19.99,
    category: "Low Light Plants",
    imgUrl: "./assets/Products/3.png",
    rating: 4.3,
  },
  {
    _id: uuid(),
    name: "Aloe Vera",
    price: 14.99,
    category: "Succulents",
    imgUrl: "./assets/Products/4.png",
    rating: 4.1,
  },
  {
    _id: uuid(),
    name: "Bamboo Palm",
    price: 29.99,
    category: "Indoor Plants",
    imgUrl: "./assets/Products/1.png",
    rating: 4.6,
  },
  {
    _id: uuid(),
    name: "Jade Plant",
    price: 22.99,
    category: "Succulents",
    imgUrl: "./assets/Products/2.png",
    rating: 4.4,
  },
  {
    _id: uuid(),
    name: "Peace Lily",
    price: 24.99,
    category: "Flowering Plants",
    imgUrl: "./assets/Products/3.png",
    rating: 3,
  },
  {
    _id: uuid(),
    name: "Pothos",
    price: 16.99,
    category: "Indoor Plants",
    imgUrl: "./assets/Products/4.png",
    rating: 2,
  },
  {
    _id: uuid(),
    name: "Cactus",
    price: 12.99,
    category: "Succulents",
    imgUrl: "./assets/Products/1.png",
    rating: 4.0,
  },
  {
    _id: uuid(),
    name: "Spider Plant",
    price: 18.99,
    category: "Air-Purifying Plants",
    imgUrl: "./assets/Products/2.png",
    rating: 1,
  },
];
