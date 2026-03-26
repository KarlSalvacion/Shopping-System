export type RootStackParamList = {
  Home: undefined; // holds the bottom tabs navigator
  Checkout: { selectedItems: string[] };
};

export type BottomTabParamList = {
  Home: undefined;
  Cart: undefined;
  Orders: undefined;
};
