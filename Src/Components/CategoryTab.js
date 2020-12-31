import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// Theme import
import Colors from "../Constants/Colors";
import Dimensions from "../Constants/Dimensions";
import ResponsiveFont from "../Constants/ResponsiveFont";

const CategoryTab = ({ item, index, activeTabId, onTouch }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onTouch(item.id)}
      style={[
        styles.tabCon,
        {
          backgroundColor:
            activeTabId === item.id ? Colors.primary : "rgba(255,255,255,0)",
        },
      ]}
    >
      <Text
        style={[
          styles.tabTitle,
          {
            color: activeTabId === item.id ? Colors.white : Colors.text,
            fontWeight: activeTabId === item.id ? "bold" : "700",
          },
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabCon: {
    height: Dimensions.height * 0.06,
    marginHorizontal: Dimensions.width * 0.025,
    marginVertical: Dimensions.height * 0.0125,
    padding: Dimensions.height * 0.025,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (Dimensions.height * 0.07) / 2,
    overflow: "scroll",
  },
  tabTitle: {
    fontSize: ResponsiveFont(14),
    fontWeight: "400",
  },
});

export default CategoryTab;
