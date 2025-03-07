export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  CartStack: undefined;
  Checkout: { selectedItems: string[] }; // Updated this to accept selectedItems
  Orders: undefined;
};
