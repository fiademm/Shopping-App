import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';

export function ProductsList ({navigation}) {

  function renderProduct({item: product}) {
    return (
      <View>
        {<Product {...product} onPress={() => {navigation.navigate('ProductDetails', {productId: product.id,});}}/>}
      </View>
    );
  }
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getProducts());
  });
  

  return (
    <SafeAreaView>
      <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});