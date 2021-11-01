import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet
  } from 'react-native';

import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext';
import colors from '../colors';

export function ProductDetails({route}) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  
  const { addItemToCart } = useContext(CartContext);
  
  useEffect(() => {
    setProduct(getProduct(productId));
  });
  
  function onAddToCart() {
    addItemToCart(product.id);
  }
  
  return (
    <SafeAreaView>
      <ScrollView>
      <Image
          style={styles.image}
          source={product.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
            <Button
            onPress={onAddToCart}
            title="Add to cart"
            / >
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
    flex:1  
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});


const style = StyleSheet.create({
    header: {
        paddingHorizontal:20,
        marginTop:20,
        flexDirection:"row",
        justifyContent: "space-between",
    },
    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: colors.light,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 2,
        marginTop: 30,
        paddingTop: 30,
    },
    line: {
        width:25,
        height:2,
        backgroundColor: colors.dark,
        marginBottom: 5,
        marginRight: 3,
    },
    priceTag: {
        backgroundColor: colors.green,
        width: 80,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center',
    },
    borderBtn: {
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    borderBtnText: {
        fontWeight: "bold",
        fontSize: 28,
    },
    buyBtn: {
        width: 150,
        height: 50,
        backgroundColor: colors.green,
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 30,
    },
});