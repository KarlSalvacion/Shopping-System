export interface Product {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
  }
  
  export const products: Product[] = [
    { id: "1", name: "Laptop", price: 1200, rating: 5, image: "https://via.placeholder.com/100" },
    { id: "2", name: "Smartphone", price: 800, rating: 5, image: "https://via.placeholder.com/100" },
    { id: "3", name: "Headphones", price: 200, rating: 5, image: "https://via.placeholder.com/100" },
    { id: "4", name: "Headphones", price: 200, rating: 5, image: "https://via.placeholder.com/100" },
    { id: "5", name: "Headphones", price: 200, rating: 5, image: "https://via.placeholder.com/100" },
  ];
  