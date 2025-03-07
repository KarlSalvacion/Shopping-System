import React, { useState, useRef } from "react";
import { View, Text, FlatList, Pressable, Modal, Alert, Image } from "react-native";
import { useOrders } from "./orderContext";
import stylesOP from "../styles components/stylesOP";
import { Ionicons } from "@expo/vector-icons";

const OrdersScreen = () => {
  const { orders, cancelOrder } = useOrders();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [orderToCancel, setOrderToCancel] = useState<string | null>(null);
  const flatListRef = useRef<FlatList>(null);

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  const showCancelModal = (orderId: string) => {
    setOrderToCancel(orderId);
    setIsModalVisible(true);
  };

  const handleCancelOrder = () => {
    if (orderToCancel) {
      cancelOrder(orderToCancel);
      setIsModalVisible(false); 
    }
  };

  return (
    <View style={stylesOP.ordersContainer}>
      <Pressable style={stylesOP.orderHeaderContainer} onPress={scrollToTop}>
        <Text style={stylesOP.orderHeaderTitle}>My Orders</Text>
      </Pressable>

      {orders.length === 0 ? (
        <Text style={stylesOP.emptyOrderText}>No orders yet.</Text>
      ) : (
        <FlatList
          ref={flatListRef}
          data={orders}
          keyExtractor={(order) => order.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={stylesOP.orderCard}>
              {/* Order ID */}
              <View style={stylesOP.orderIDContainer}>
                <Ionicons name="document-text" size={20} color="rgb(43, 30, 98)" />
                <Text style={stylesOP.orderIDText}>Order ID: {item.id}</Text>
              </View>

              {/* Ordered Items */}
              <FlatList
                data={item.items}
                keyExtractor={(prod) => prod.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: prod }) => (
                  <View style={stylesOP.orderItem}>
                    <Image source={prod.image} style={stylesOP.productImage} />
                    <View style={stylesOP.itemDetails}>
                      <Text style={stylesOP.productTitle}>{prod.name}</Text>
                      <Text style={stylesOP.productPrice}>
                        ₱{(prod.price * prod.quantity).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </Text>
                      <Text style={stylesOP.quantityText}>Quantity: {prod.quantity}</Text>
                    </View>
                  </View>
                )}
              />

                <View style={stylesOP.bottomBarOP}>
                    <Text style={stylesOP.totalPriceText}>
                        Total: ₱{item.total.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}
                    </Text>
                    <Pressable
                        style={stylesOP.cancelButton}
                        onPress={() => showCancelModal(item.id)}
                    >
                        <Text style={stylesOP.buttonText}>Cancel Order</Text>
                    </Pressable>
                </View>
            </View>
          )}
        />
      )}

      <Modal transparent={true} visible={isModalVisible} animationType="fade">
        <View style={stylesOP.modalBackground}>
          <View style={stylesOP.modalContainer}>
            <Text style={stylesOP.modalText}>Are you sure you want to cancel this order?</Text>
            <View style={stylesOP.yesNoButtons}>
                <Pressable
                    style={stylesOP.modalButton}
                    onPress={handleCancelOrder}
                >
                    <Text style={stylesOP.modalButtonText}>Yes</Text>
                </Pressable>
                <Pressable
                    style={stylesOP.modalButton}
                    onPress={() => setIsModalVisible(false)}
                >
                    <Text style={stylesOP.modalButtonText}>No</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OrdersScreen;
