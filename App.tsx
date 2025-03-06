import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CartProvider } from './components/cartContext';
import HomeScreen from './components/homePage';
import CartScreen from './components/cartPage';
import CheckoutScreen from './components/checkoutPage';
import { RootStackParamList } from "./components/navigationTypes";
import stylesGlobal from "./styles components/stylesGlobal";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <CartProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle="default" backgroundColor="transparent" translucent />

          <SafeAreaView style={stylesGlobal.safeAreaContainer}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Cart" component={CartScreen} />
              <Stack.Screen name="Checkout" component={CheckoutScreen} />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </CartProvider>
  );
}
