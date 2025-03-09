export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Supreme Mesh Long-Sleeve Top 'Royal'",
    price: 5200,
    rating: 4.2,
    image: require("../assets/longsleeve1-supreme.jpg"),
  },
  {
    id: "2",
    name: "Air Jordan 4 Retro 'Oxidized Green'",
    price: 17000,
    rating: 5,
    image: require("../assets/shoes1-nike.jpg"),
  },
  {
    id: "3",
    name: "New Balance 1906R 'Silver Metallic Black'",
    price: 9500,
    rating: 5,
    image: require("../assets/shoes2-NB.jpg"),
  },
  {
    id: "4",
    name: "Corteiz C-Star Denim Shorts 'Faded Blue'",
    price: 3000,
    rating: 4.8,
    image: require("../assets/shorts1.webp"),
  },
  {
    id: "5",
    name: "Nike Big Swoosh Reversible Boa Jacket 'Black'",
    price: 5700,
    rating: 5,
    image: require("../assets/jacket1-nike.webp"),
  },
  {
    id: "6",
    name: "Givenchy Varsity Jacket 'White/Sky Blue'",
    price: 25000,
    rating: 5,
    image: require("../assets/jacket2-givenchy.webp"),
  },
  {
    id: "7",
    name: "Supreme NCAA Hockey Jersey 'White'",
    price: 33600,
    rating: 5,
    image: require("../assets/jacket3-supreme.webp"),
  },
  {
    id: "8",
    name: "Vapor Edge Kobe 6 SE 'Grinch'",
    price: 8500,
    rating: 4,
    image: require("../assets/shoes3-nike.webp"),
  },
  {
    id: "9",
    name: "Denim Tears The Cotton Wreath Sweatshirt 'Black'",
    price: 12700,
    rating: 5,
    image: require("../assets/hoodie1-denimtears.webp"),
  },
  {
    id: "10",
    name: "Supreme x Frank Frazetta Hooded Sweatshirt 'Black'",
    price: 25000,
    rating: 5,
    image: require("../assets/jacket2-givenchy.webp"),
  },
  {
    id: "11",
    name: "Gucci Monogram Bifold Wallet 'Beige/Ebony/Blue'",
    price: 7000,
    rating: 4.5,
    image: require("../assets/wallet1-gucci.webp"),
  },
  {
    id: "12",
    name: "Off-White Onthego Lea Sle Varsity Jacket 'Red/Off White'",
    price: 55000,
    rating: 5,
    image: require("../assets/jacket4-offwhite.webp"),
  },
];
