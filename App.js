import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import { Login } from './Login.js'
import { SignUp } from './screens/SignUp.js';
import { AcceptedOrder } from './screens/AcceptedOrder.js';
import { CheckoutIcon } from './components/CheckoutIcon.js';
import { Splash } from './screens/Splash.js';
import { Welcome } from './screens/Welcome.js';
import { Checkout } from './screens/Checkout.js';
import { CCInfo } from './screens/CCInfo.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName = 'Splash'
        >
          <Stack.Screen name='Splash' component={Splash}
          options={({ navigation }) => ({
            headerShown: false
          })}/>
          <Stack.Screen name='Welcome' component={Welcome}
          options={({ navigation }) => ({
            headerShown: false
          })}/>
          <Stack.Screen name='SignUp' component={SignUp}
          options={({ navigation }) => ({
            headerShown: false
          })}/>
          <Stack.Screen name='Login' component={Login}
          options={({ navigation }) => ({
            headerShown: false
          })}/>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            headerShown: false
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CheckoutIcon navigation={navigation} />,
          })} />
          <Stack.Screen name='Checkout' component={Checkout}
          options={({ navigation }) => ({
            title: 'Personal Information',
            headerTitleStyle: styles.headerTitle,
          })}/>
          <Stack.Screen name='CCInfo' component={CCInfo}
          options={({ navigation }) => ({
            title: 'Credit Card Information',
            headerTitleStyle: styles.headerTitle,
          })}/>
          <Stack.Screen name='AcceptedOrder' component={AcceptedOrder}
          options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  }
});


export default App;