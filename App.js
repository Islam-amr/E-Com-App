// Package import
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

// Main Navigator
import MainNavigator from "./Src/Navigation/MainNavigator";

// Reducers import
import Products from "./Src/Redux/Reducers/Products";
import Cart from "./Src/Redux/Reducers/Cart";

const rootReducer = combineReducers({
  Products: Products,
  Cart: Cart,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
