// Package import
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Theme import
import Colors from "../Constants/Colors";
import Dimensions from "../Constants/Dimensions";
import ResponsiveFont from "../Constants/ResponsiveFont";

import * as cartActions from "../Redux/Action/Cart";

const Cart = () => {
  const disptach = useDispatch();
  const total = useSelector((state) => state.Cart.totalAmount);
  const cart = useSelector((state) => {
    let sortedCart = [];
    for (const key in state.Cart.items) {
      sortedCart.push({
        id: key,
        name: state.Cart.items[key].name,
        quantity: state.Cart.items[key].quantity,
        price: state.Cart.items[key].price,
        img: state.Cart.items[key].img,
      });
    }
    return sortedCart.reverse();
  });
  return (
    <View style={styles.mainView}>
      <View style={styles.itemListCon}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.itemCon}>
                <View style={[styles.flexCon, { flex: 1 }]}>
                  <Image style={styles.img} source={item.img} />
                </View>
                <View
                  style={{
                    flex: 2,
                    marginHorizontal: 10,
                    paddingHorizontal: 10,
                    justifyContent: "center",
                  }}
                >
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.wght}>1 KG</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        disptach(
                          cartActions.decreaseQty(
                            item.id,
                            item.name,
                            item.quantity,
                            item.price,
                            item.img
                          )
                        )
                      }
                    >
                      <Text style={styles.actionStyle}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qty}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        disptach(
                          cartActions.increaseQty(
                            item.id,
                            item.name,
                            item.quantity,
                            item.price,
                            item.img
                          )
                        )
                      }
                    >
                      <Text style={styles.actionStyle}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={[styles.flexCon, { flex: 0.75 }]}>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() =>
                      disptach(cartActions.removeFromCart(item.id))
                    }
                  >
                    <Image
                      style={styles.trash}
                      source={require("../Assets/Icons/trash.png")}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.title}>$ {item.price}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View>
        <Text style={styles.addcop}>Add Coupon</Text>
        <View
          style={{
            flexDirection: "row",
            width: Dimensions.width * 0.95,
            height: Dimensions.height * 0.1,
            padding: 10,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              flex: 0.7,
              justifyContent: "center",
            }}
          >
            <TextInput
              autoCorrect={"none"}
              style={styles.input}
              placeholder="Enter your coupon"
            />
          </View>
          <View
            style={{
              flex: 0.3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.btnCon}>
              <Text style={styles.apply}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          width: Dimensions.width * 0.95,
          alignSelf: "center",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.wght2}>TAX</Text>
          <Text style={styles.title}>$ 0</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.wght2}>Shipping</Text>
          <Text style={styles.title}>$ 0</Text>
        </View>
        <View
          style={{
            marginTop: 5,
            borderStyle: "dotted",
            borderWidth: 1,
            borderRadius: 1,
            borderColor: Colors.text,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.wght2}>Total</Text>
          <Text style={styles.title}>$ {total}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.checkBtn}>
        <Text style={styles.check}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  itemListCon: {
    width: Dimensions.width,
    maxHeight: Dimensions.height * 0.5,
  },
  itemCon: {
    width: "100%",
    height: Dimensions.height * 0.14,
    marginBottom: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  flexCon: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: ResponsiveFont(16),
    fontWeight: "600",
    marginVertical: 2,
  },
  wght: {
    fontSize: ResponsiveFont(12),
    color: Colors.text,
  },
  img: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  actionStyle: {
    fontSize: ResponsiveFont(26),
    color: Colors.black,
    marginHorizontal: 10,
  },
  qty: {
    fontSize: ResponsiveFont(22),
    color: Colors.primary,
    fontWeight: "500",
    marginHorizontal: 10,
  },
  trash: {
    width: Dimensions.width * 0.08,
    height: Dimensions.width * 0.08,
    resizeMode: "contain",
    tintColor: Colors.primary,
  },
  addcop: {
    fontSize: ResponsiveFont(18),
    fontWeight: "700",
    marginLeft: 15,
    marginTop: 5,
  },
  input: {
    width: "100%",
    height: "80%",
    fontSize: ResponsiveFont(14),
    padding: 10,
    backgroundColor: "rgba(211, 211, 211,0.3)",
    borderRadius: 20,
  },
  btnCon: {
    width: "80%",
    height: "80%",
    backgroundColor: "rgba(211, 211, 211,0.8)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  apply: {
    fontSize: ResponsiveFont(14),
    fontWeight: "500",
  },
  wght2: {
    fontSize: ResponsiveFont(14),
    color: Colors.text,
  },
  checkBtn: {
    width: Dimensions.width * 0.9,
    height: Dimensions.height * 0.08,
    backgroundColor: Colors.primary,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 15,
  },
  check: {
    fontSize: ResponsiveFont(18),
    color: "white",
    fontWeight: "900",
  },
});

export default Cart;
