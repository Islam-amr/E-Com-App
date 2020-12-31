import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Theme import
import Colors from "../Constants/Colors";
import Dimensions from "../Constants/Dimensions";
import ResponsiveFont from "../Constants/ResponsiveFont";

const ProductItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.productCon}
      activeOpacity={0.6}
      onPress={() => navigation.navigate("Details", { item: item })}
    >
      <View style={styles.imgCon}>
        {item.img && <Image style={styles.img} source={item.img} />}
      </View>
      <View style={styles.actionCon}>
        <View style={styles.desCon}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.weightTxt}>1 KG</Text>
          <Text style={styles.priceTxt}>$ {item.price}</Text>
        </View>
        <View style={styles.plusCon}>
          <TouchableOpacity style={styles.plus} onPress={() => navigation.navigate("Details", { item: item })}>
            <Image
              style={styles.plusIcon}
              source={require("../Assets/Icons/plus.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productCon: {
    flex: 0.5,
    height: Dimensions.height * 0.25,
    padding: 10,
  },
  productTitle: {
    fontSize: ResponsiveFont(14),
    fontWeight: "600",
  },
  weightTxt: {
    fontSize: ResponsiveFont(10),
    fontWeight: "600",
    color: Colors.text,
  },
  priceTxt: {
    fontSize: ResponsiveFont(12),
    fontWeight: "600",
  },
  imgCon: {
    flex: 1.5,
  },
  actionCon: {
    flex: 1,
    flexDirection: "row",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  desCon: {
    flex: 0.7,
    justifyContent: "center",
  },
  plusCon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    width: Dimensions.width * 0.08,
    height: Dimensions.width * 0.08,
    borderRadius: 1000,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  plusIcon: {
    width: "50%",
    height: "50%",
    tintColor: Colors.white,
    resizeMode: "contain",
  },
});

export default ProductItem;
