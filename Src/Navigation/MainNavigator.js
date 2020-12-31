// Package import
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens import
import Products from '../Screens/Products';
import ProductDetails from '../Screens/ProductDetails';
import Cart from '../Screens/Cart';

// Theme import
import Colors from '../Constants/Colors';
import Dimensions from '../Constants/Dimensions';
import ResponsiveFont from '../Constants/ResponsiveFont';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary },
          headerTitleStyle: { color: Colors.white },
          headerTintColor: 'white',
        }}>
        <Stack.Screen name="Home" component={Products} />
        <Stack.Screen
          name="Details"
          component={ProductDetails}
          options={{ title: 'Product Details' }}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
