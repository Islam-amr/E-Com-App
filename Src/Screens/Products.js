// Package import
import React, { useState, useCallback, useEffect } from "react";
import { View, FlatList, Image, TextInput, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Data import
import Categories from "../Data/Categories";

// Theme import
import Colors from "../Constants/Colors";
import Dimensions from "../Constants/Dimensions";
import ResponsiveFont from "../Constants/ResponsiveFont";

// Components import
import Footer from "../Components/Footer";
import CategoryTab from "../Components/CategoryTab";
import ProductItem from "../Components/ProductItem";

const Products = () => {
  const categories = useSelector((state) => state.Products.availableProducts);
  const [activeTabId, setActiveTabId] = useState(categories[0].id);
  const [searchWord, setSearchWord] = useState("");
  const [result, setResult] = useState(undefined);
  const handleCategoryPress = (id) => {
    setActiveTabId(id);
  };

  const handleSubmit = useCallback(
    (text) => {
      const filter = categories.filter((item) =>
        item.products.find((i) =>
          i.title.toLowerCase().match(text.toLowerCase())
        )
      );

      // i.title.toLowerCase().match(text)
      const newData =
        filter.length !== 0
          ? filter[0].products.filter((i) =>
              i.title.toLowerCase().match(text.toLowerCase())
            )
          : undefined;

      setSearchWord(text);
      setResult(newData);
      if (text.length === 0) {
        setResult(undefined);
      }
    },
    [searchWord]
  );

  console.log(result);

  return (
    <View style={styles.mainView}>
      <View style={styles.searchCon}>
        <TextInput
          value={searchWord}
          placeholder="Search"
          style={styles.search}
          onChangeText={handleSubmit}
        />
        <View
          style={{
            width: "15%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "80%", height: "80%", resizeMode: "contain" }}
            source={require("../Assets/Icons/search.png")}
          />
        </View>
      </View>
      {searchWord === "" && (
        <View style={styles.tabsCon}>
          <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => {
              return (
                <CategoryTab
                  item={item}
                  activeTabId={activeTabId}
                  onTouch={handleCategoryPress}
                />
              );
            }}
          />
        </View>
      )}
      <View style={styles.productsCon}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          alwaysBounceVertical
          data={
            result === undefined
              ? Categories.find((item) => item.id === activeTabId).products
              : result
          }
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <ProductItem item={item} />;
          }}
        />
      </View>
      <Footer />
      <View
        style={{
          width: Dimensions.width,
          height: Dimensions.height * 0.1,
          backgroundColor: Colors.primary,
          position: "absolute",
          bottom: 0,
          zIndex: -1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  searchCon: {
    width: Dimensions.width * 0.9,
    height: Dimensions.height * 0.06,
    marginVertical: Dimensions.height * 0.01,
    borderRadius: 15,
    padding: 5,
    backgroundColor: "rgba(211, 211, 211,0.3)",
    borderRadius: 20,
    alignSelf: "center",
    flexDirection: "row",
  },
  search: {
    width: "85%",
    height: "100%",
    padding: 10,
    fontSize: ResponsiveFont(12),
  },
  tabsCon: {
    width: Dimensions.width,
    alignSelf: "center",
  },
  productsCon: {
    height: Dimensions.height * 0.75,
    paddingBottom: Dimensions.height * 0.1,
    paddingHorizontal: Dimensions.width * 0.025,
  },
});
export default Products;
