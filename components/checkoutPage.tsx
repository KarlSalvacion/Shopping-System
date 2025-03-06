import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { useCart } from "./cartContext";
import stylesCHP from "../styles components/stylesCHP";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./navigationTypes"; 

type CheckoutScreenNavigationProp = StackNavigationProp<RootStackParamList, "Checkout">;

const CheckoutScreen = () => {
  const { cart, clearCart } = useCart();
  const navigation = useNavigation<CheckoutScreenNavigationProp>();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={stylesCHP.checkOutContainer}>
      {cart.map((item) => (
        <Text key={item.id}>{item.name} - ${item.price * item.quantity}</Text>
      ))}
      <Text>Total: ${total}</Text>
      <Button
        title="Checkout"
        onPress={() => {
          Alert.alert("Checkout successful", "", [
            { 
              text: "OK", 
              onPress: () => { 
                clearCart();
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                });
              } 
            }
          ]);
        }}
      />
    </View>
  );
};

export default CheckoutScreen;
