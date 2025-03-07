import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CartProvider } from "./components/cartContext";
import { OrdersProvider } from "./components/orderContext";
import HomeScreen from "./components/homePage";
import CartScreen from "./components/cartPage";
import CheckoutScreen from "./components/checkoutPage";
import OrdersScreen from "./components/ordersPage";
import { RootStackParamList } from "./components/navigationTypes";
import stylesGlobal from "./styles components/stylesGlobal";
import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

// Bottom Tab Navigator
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: route.name === "Checkout" ? { display: "none" } : stylesGlobal.tabBarStyle,
        tabBarIcon: ({ color, size, focused }) => (
          <View
            style={[stylesGlobal.iconContainer, focused && stylesGlobal.activeIconContainer]}
          >
            {route.name === "Home" ? (
              <FontAwesome name="home" size={size} color={color} />
            ) : route.name === "Cart" ? (
              <Entypo name="shopping-cart" size={size} color={color} />
            ) : (
              <MaterialIcons name="receipt-long" size={size} color={color} />
            )}
          </View>
        ),
        tabBarShowLabel: false,
        tabBarActiveTintColor: "rgb(25, 24, 29)",
        tabBarInactiveTintColor: "rgb(181, 175, 196)",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

// Stack Navigator
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <OrdersProvider>
      <CartProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <StatusBar barStyle="default" backgroundColor="transparent" translucent />
            <SafeAreaView style={stylesGlobal.safeAreaContainer} edges={["top", "left", "right"]}>
              <AppNavigator />
            </SafeAreaView>
          </NavigationContainer>
        </SafeAreaProvider>
      </CartProvider>
    </OrdersProvider>
  );
}
