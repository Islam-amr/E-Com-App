// Package import
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Rating, AirbnbRating } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

// Theme import
import Colors from "../Constants/Colors";
import Dimensions from "../Constants/Dimensions";
import ResponsiveFont from "../Constants/ResponsiveFont";

import * as cartActions from "../Redux/Action/Cart";

const ProductDetails = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const itemData = route.params?.item ? route.params.item : undefined;
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  const onRemove = useCallback(() => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }, [qty]);

  const onAdd = useCallback(() => {
    setQty(qty + 1);
  }, [qty]);
  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.sliderView}>
        <Carousel
          data={itemData.imgs}
          loop={true}
          layout="default"
          autoplay={false}
          useScrollView={true}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          removeClippedSubviews={false}
          sliderWidth={Dimensions.width}
          itemWidth={Dimensions.width}
          onSnapToItem={(i) => setActiveImg(i)}
          renderItem={({ item, index }) => (
            <View style={styles.imageCon}>
              <Image style={styles.img} source={item} />
            </View>
          )}
        />
        <Pagination
          animatedTension={1}
          containerStyle={styles.pagCon}
          dotStyle={styles.ww}
          dotColor={Colors.primary}
          inactiveDotColor={Colors.text}
          inactiveDotOpacity={1}
          inactiveDotScale={0.5}
          activeDotIndex={activeImg}
          dotsLength={itemData.imgs.length}
        />
      </View>
      <Text style={styles.headerTitle}>{itemData.title}</Text>

      <View style={[styles.productDetails, { marginTop: 5 }]}>
        <View style={{ flex: 0.6 }}>
          <Text style={styles.weightTitle}>Weight : 5 kg</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.priceTitle, styles.deco]}>
              ${itemData.price + itemData.price / 2}{" "}
            </Text>
            <Text style={styles.priceTitle}>${itemData.price}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.4,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity style={styles.actionBtnCon} onPress={onRemove}>
            <Text style={styles.actionStyle}>-</Text>
          </TouchableOpacity>
          <View style={styles.actionBtnCon}>
            <Text
              style={[
                styles.actionStyle,
                { color: Colors.black, fontWeight: "800" },
              ]}
            >
              {qty}
            </Text>
          </View>
          <TouchableOpacity style={styles.actionBtnCon} onPress={onAdd}>
            <Text style={styles.actionStyle}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          styles.productDetails,
          { flexDirection: "column", marginTop: 10 },
        ]}
      >
        <Text style={styles.prodTxt}>Product Details</Text>
        <Text style={styles.desTxt}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s .
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={styles.prodTxt}>Review</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Rating
              imageSize={20}
              readonly
              startingValue={5}
              style={styles.rating}
            />
            <Image
              style={styles.icon}
              source={require("../Assets/Icons/rightArrow.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.productDetails,
          {
            flexDirection: "row",
            height: Dimensions.height * 0.1,
            marginTop: 15,
          },
        ]}
      >
        <TouchableOpacity
          style={{
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.cart}
            source={require("../Assets/Icons/cart.png")}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 0.8,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: Colors.primary,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              dispatch(
                cartActions.addToCart(
                  itemData.id,
                  itemData.title,
                  qty,
                  itemData.price,
                  itemData.img
                )
              );
              navigation.pop();
            }}
          >
            <Text style={styles.buy}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sliderView: {
    width: Dimensions.width,
    height: Dimensions.height * 0.35,
  },
  img: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  ww: {
    width: Dimensions.width * 0.03,
    height: Dimensions.width * 0.01,
    borderRadius: 100,
    marginHorizontal: Dimensions.width * 0.001,
  },
  pagCon: {
    position: "absolute",
    bottom: -(Dimensions.height * 0.02),
    alignSelf: "center",
  },
  productDetails: {
    width: Dimensions.width,
    flexDirection: "row",
    paddingHorizontal: Dimensions.width * 0.025,
  },
  imageCon: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    paddingHorizontal: Dimensions.width * 0.025,
    fontSize: ResponsiveFont(24),
    fontWeight: "bold",
    marginBottom: Dimensions.height * 0.0025,
  },
  weightTitle: {
    fontSize: ResponsiveFont(12),
    color: Colors.text,
    marginBottom: Dimensions.height * 0.0025,
  },
  priceTitle: {
    fontSize: ResponsiveFont(20),
    color: Colors.primary,
    marginBottom: Dimensions.height * 0.0025,
  },
  actionBtnCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionStyle: {
    fontSize: ResponsiveFont(24),
    fontWeight: "600",
    color: Colors.primary,
  },
  desTxt: {
    color: Colors.text,
    marginTop: 5,
    fontSize: ResponsiveFont(12),
  },
  deco: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: Colors.black,
    marginRight: 4,
    fontSize: ResponsiveFont(15),
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: Colors.text,
    marginHorizontal: 5,
    resizeMode: "contain",
  },
  cart: {
    width: "40%",
    height: "40%",
    resizeMode: "contain",
  },
  buy: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: ResponsiveFont(18),
  },
  prodTxt: {
    fontSize: ResponsiveFont(14),
    color: Colors.black,
    fontWeight: "500",
  },
});

export default ProductDetails;
