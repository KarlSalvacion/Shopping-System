import React, { useState, useRef } from "react";
import { View, Text, FlatList, Pressable, Image } from "react-native";
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
  const flatListRef = useRef<FlatList>(null);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const totalPrice = cart
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const toggleSelectItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.map((item) => item.id));
    }
  };

  return (
    <View style={stylesCP.cartContainer}>
      <Pressable
        onPress={() => flatListRef.current?.scrollToOffset({ offset: 0, animated: true })}
        style={stylesCP.headerContainerCP}
      >
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text style={stylesCP.titleTextCP}>My Cart</Text>
      </Pressable>

      {cart.length === 0 ? (
        <Text style={stylesCP.emptyCartText}>No items in your cart.</Text>
      ) : (
        <>
          <FlatList
            ref={flatListRef}
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={stylesCP.cartItem}>
                <Pressable onPress={() => toggleSelectItem(item.id)}>
                  <Ionicons
                    name={selectedItems.includes(item.id) ? "checkbox" : "square-outline"}
                    size={24}
                    color="rgb(29, 18, 71)"
                  />
                </Pressable>
                <Image source={item.image} style={stylesCP.productImage} />
                <View style={stylesCP.itemDetails}>
                  <Text style={stylesCP.productTitle}>{item.name}</Text>
                  <View style={stylesCP.priceQuantityContainer}>
                    <Text style={stylesCP.productPrice}>
                      ₱{item.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </Text>
                    <View style={stylesCP.quantityAdjuster}>
                      <Pressable
                        style={stylesCP.quantityButton}
                        onPress={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Text style={stylesCP.buttonText}>-</Text>
                      </Pressable>
                      <Text style={stylesCP.quantityText}>{item.quantity}</Text>
                      <Pressable
                        style={stylesCP.quantityButton}
                        onPress={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Text style={stylesCP.buttonText}>+</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />

          <View style={stylesCP.bottomBar}>
            <Pressable style={stylesCP.selectAllContainer} onPress={toggleSelectAll}>
              <Ionicons
                name={selectedItems.length === cart.length ? "checkbox" : "square-outline"}
                size={24}
                color="rgb(29, 18, 71)"
              />
              <Text style={stylesCP.selectAllText}>All</Text>
            </Pressable>
            <View style={stylesCP.bottomBarRight}>
              <Text style={stylesCP.totalPriceText}>
                Total: ₱{totalPrice.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Text>
              <Pressable
                style={[stylesCP.checkoutButton, selectedItems.length === 0 && stylesCP.disabledButton]}
                onPress={() => navigation.navigate("Checkout", { selectedItems: selectedItems })}
                disabled={selectedItems.length === 0}
              >
                <Text style={stylesCP.buttonText}>
                  Check Out ({selectedItems.length})
                </Text>
              </Pressable>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;
