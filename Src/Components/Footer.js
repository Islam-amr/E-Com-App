import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Theme import
import Colors from '../Constants/Colors';
import Dimensions from '../Constants/Dimensions';
import ResponsiveFont from '../Constants/ResponsiveFont';

const Footer = () => {
  const navigation = useNavigation();
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
    <View
      style={{
        height: Dimensions.height * 0.11,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0)',
      }}>
      <Svg
        height="100%"
        width="100%"
        viewBox={`100 50 ${Dimensions.width * 3.5} ${Dimensions.height * 0.4}`}
        fill="none"
        style={{ position: 'absolute' }}>
        <Path
          scaleX={2.8}
          fill={Colors.primary}
          d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,64C672,53,768,43,864,53.3C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </Svg>
      <View
        style={{
          height: '80%',
          width: '100%',
          bottom: 0,
          zIndex: 1,
          position: 'absolute',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 0.7,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {cart.length === 0 ? (
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: ResponsiveFont(14),
                fontWeight: '500',
                color: 'white',
              }}>
              Your cart is empty
            </Text>
          ) : (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={cart}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.footerItem}>
                    <Image
                      style={{
                        width: Dimensions.width * 0.115,
                        height: Dimensions.width * 0.115,
                        resizeMode: 'contain',
                      }}
                      source={item.img}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        padding: 2,
                        right: -5,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{ fontSize: ResponsiveFont(10) }}>
                        x{item.quantity}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          )}
        </View>
        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: ResponsiveFont(16),
              color: 'white',
              fontWeight: 'bold',
            }}>
            $ {total}
          </Text>
          <TouchableOpacity
            style={{
              width: Dimensions.width * 0.06,
              height: Dimensions.width * 0.06,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Cart')}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
                tintColor: 'white',
              }}
              source={require('../Assets/Icons/2ndArrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 35,
  },
  footerItem: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 1000,
  },
});

export default Footer;
