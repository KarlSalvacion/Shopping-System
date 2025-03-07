import React, { createContext, useState, useContext, ReactNode } from "react";
import { Product } from "../data/products";

type OrderItem = Product & { quantity: number };
type Order = { id: string; items: OrderItem[]; total: number };

interface OrdersContextProps {
  orders: Order[];
  addOrder: (items: OrderItem[], total: number) => void;
  cancelOrder: (id: string) => void;
}

const OrdersContext = createContext<OrdersContextProps | undefined>(undefined);

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (items: OrderItem[], total: number) => {
    const newOrder: Order = {
      id: Date.now().toString(),
      items,
      total,
    };
    setOrders((prevOrders) => [newOrder, ...prevOrders]);
  };

  const cancelOrder = (id: string) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder, cancelOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) throw new Error("useOrders must be used within an OrdersProvider");
  return context;
};
