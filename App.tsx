import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import stylesGlobal from './styles components/stylesGlobal';
import HomePage from './components/homePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
       <SafeAreaView style={stylesGlobal.safeAreaContainer}>
        <StatusBar style="auto"/>

        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
        </Stack.Navigator>
        <HomePage/>
      </SafeAreaView>
    </NavigationContainer>   
  );
}
