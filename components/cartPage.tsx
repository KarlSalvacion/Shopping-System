import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { useCart } from "./cartContext";
import stylesCP from "../styles components/stylesCP";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./navigationTypes";
import { Ionicons } from "@expo/vector-icons";

type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, "Cart">;

const CartScreen = () => {
  const { cart, updateQuantity } = useCart();
  const navigation = useNavigation<CartScreenNavigationProp>();

  return (
    <View style={stylesCP.cartContainer}>
      {/* Back Button */}
      <Pressable style={stylesCP.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={stylesCP.backButtonText}>Back to Home</Text>
      </Pressable>

      <Text style={stylesCP.cartTitle}>Your Cart</Text>

      {/* If cart is empty, show message */}
      {cart.length === 0 ? (
        <Text style={stylesCP.emptyCartText}>No items in your cart.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={stylesCP.cartItems}>
                <Text>{item.name} - ${item.price} x {item.quantity}</Text>
                
                <View style={stylesCP.buttonRow}>
                  <Pressable style={stylesCP.addButton} onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Text style={stylesCP.buttonText}>+</Text>
                  </Pressable>
                  
                  <Pressable style={stylesCP.removeButton} onPress={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Text style={stylesCP.buttonText}>-</Text>
                  </Pressable>
                </View>
              </View>
            )}
          />

          {/* Checkout Button */}
          <Pressable style={stylesCP.checkoutButton} onPress={() => navigation.navigate("Checkout")}>
            <Text style={stylesCP.buttonText}>Proceed to Checkout</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default CartScreen;
