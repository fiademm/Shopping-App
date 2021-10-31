import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';

import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';

export function ProductsList ({navigation}) {

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }
  
  
  const categories = ['LONG', 'SHORT'];
  const [categoryIndex,setCategoryIndex] = React.useState(0)
  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item,index) => (
          <TouchableOpacity 
          key={index}
          activeOpacity={0.8} 
          onPress={() => setCategoryIndex(index)}
          >
                <Text style={[styles.categoryText, categoryIndex == index && styles.categoryTextSelected]}>{item}</Text>
            </TouchableOpacity>
        ))}
      </View>
    );
  };
  

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });
  
  return (
    <SafeAreaView style={{
      flex:1, 
      paddingHorizontal:20, 
      backgroundColor: '#fff',
  }}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize:25, fontWeight:"bold"}}>
            Welcome to
          </Text>
          <Text style={{fontSize:38, fontWeight:"bold", color: '#00b761'}}>
            Fits First
          </Text>
          </View>
            <Entypo name="shopping-cart" size={28} color="black" onPress={() => navigation.navigate('Cart')} />
      </View>

      <View style={{marginTop:30, flexDirection:"row"}}>
        <View style={styles.searchContainer} >
          <Feather name="search" size={25} color="black" style={{marginLeft:20}} />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
      <View style={styles.sortBtn}>
        <FontAwesome name="sort" size={30} color={'#fff'} />
      </View>
      </View>

      <CategoryList />
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
     />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
},
searchContainer: {
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    flex:1,
    flexDirection:"row",
    alignItems: "center",
},
input: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#000',
    flex: 1,
},
sortBtn: {
    marginLeft:10,
    height: 50,
    width: 50,
    backgroundColor: '#00b761',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
},
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  categoryText: {
      fontSize:16,
      color:"grey",
      fontWeight:"bold",
  },
  categoryTextSelected: {
      color: '#00b761',
      paddingBottom: 5,
      borderBottomWidth: 2, 
      borderColor: '#00b761',
  },
});