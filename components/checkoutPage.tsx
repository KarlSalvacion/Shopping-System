import React, { useState, useRef } from "react"; // Import useRef
import { View, Text, Pressable, Image, FlatList, Modal } from "react-native";
import { useCart } from "./cartContext";
import { useOrders } from "./orderContext";
import stylesCHP from "../styles components/stylesCHP";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./navigationTypes";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

type CheckoutScreenNavigationProp = StackNavigationProp<RootStackParamList, "Checkout">;
type CheckoutScreenRouteProp = RouteProp<RootStackParamList, "Checkout">;

const CheckoutScreen = ({ route }: { route: CheckoutScreenRouteProp }) => {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrders();
  const navigation = useNavigation<CheckoutScreenNavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);

  const flatListRef = useRef<FlatList<any>>(null);

  const { selectedItems } = route.params;

  const selectedCartItems = cart.filter((item) => selectedItems.includes(item.id));

  const total = selectedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={stylesCHP.checkOutContainer}>

      <Pressable
        onPress={() => flatListRef.current?.scrollToOffset({ offset: 0, animated: true })}
        style={stylesCHP.headerContainerCHP}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text style={stylesCHP.titleTextCHP}>Checkout</Text>
      </Pressable>

      {selectedCartItems.length === 0 ? (
        <Text style={stylesCHP.emptyCartText}>No items to checkout.</Text>
      ) : (
        <FlatList
          ref={flatListRef}
          data={selectedCartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={stylesCHP.checkOutItem}>
              <Image source={item.image} style={stylesCHP.productImage} />
              <View style={stylesCHP.itemDetails}>
                <Text style={stylesCHP.productTitle}>{item.name}</Text>
                <Text style={stylesCHP.productPrice}>
                  ₱{(item.price * item.quantity).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </Text>
                <Text style={stylesCHP.quantityText}>Quantity: {item.quantity}</Text>
              </View>
            </View>
          )}
        />
      )}

      {selectedCartItems.length > 0 && (
        <View style={stylesCHP.bottomBar}>
          <View style={stylesCHP.bottomBarContents}>
            <Text style={stylesCHP.totalPriceText}>
              Total: ₱{total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
            <Pressable
              style={stylesCHP.checkoutButton}
              onPress={() => {
                addOrder(selectedCartItems, total);
                setModalVisible(true);
              }}
            >
              <Text style={stylesCHP.buttonText}>Confirm Purchase ({selectedCartItems.length})</Text>
            </Pressable>
          </View>
        </View>
      )}

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={stylesCHP.modalBackground}>
          <View style={stylesCHP.modalContainer}>
            <FontAwesome5 name="check-circle" style={stylesCHP.modalIconCheckCHP} />
            <Text style={stylesCHP.modalText}>Checkout Successful!</Text>
            <Pressable
              style={stylesCHP.okButton}
              onPress={() => {
                setModalVisible(false);
                clearCart();
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                });
              }}
            >
              <Text style={stylesCHP.okButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CheckoutScreen;
