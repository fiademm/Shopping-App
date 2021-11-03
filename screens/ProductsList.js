import React, {useEffect, useState} from 'react';
import { View, Text, Dimensions, TextInput, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';


import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';
import colors from '../colors.js'

const width = Dimensions.get('screen').width/2-30;
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
    <SafeAreaView
    style={{
      flex:1, 
      paddingHorizontal:20, 
      backgroundColor: colors.white,
    }}>
      <View style={style.header}>
                    <View>
                        <Text 
                            style={{
                                fontSize:25, fontWeight:"bold"
                            }}>
                                Welcome to the
                        </Text>
                        <Text 
                            style={{
                                fontSize:38, fontWeight:"bold", fontStyle:'italic', color: 'darkgrey'
                            }}>
                                Drip House
                        </Text>
                    </View>
                    <Entypo name="shopping-cart" size={28} color="black" onPress={() => navigation.navigate('Cart')} />
                </View>

                <View style={{marginTop:30, marginBottom:10, flexDirection:"row"}}>
                    <View style={style.searchContainer} >
                        <Feather name="search" size={25} color="black" style={{marginLeft:20, marginRight:10}} />
                        <TextInput placeholder="Search" style={style.input} />
                    </View>
                    <View style={style.sortBtn}>
                        <FontAwesome name="sort" size={30} color={colors.white} />
                    </View>
                </View>

      <FlatList
      columnWrapperStyle={{justifyContent:"space-between"}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: 10,
        paddingBottom: 50,
      }}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  header: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "space-between",
  },
  searchContainer: {
      height: 50,
      backgroundColor: colors.light,
      borderRadius: 10,
      flex:1,
      flexDirection:"row",
      alignItems: "center",
  },
  input: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.dark,
      flex: 1,
  },
  sortBtn: {
      marginLeft:10,
      height: 50,
      width: 50,
      backgroundColor: colors.green,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
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
      color: colors.green,
      paddingBottom: 5,
      borderBottomWidth: 2, 
      borderColor: colors.green,
  },
  card: {
      height: 225,
      backgroundColor: colors.light,
      width,
      marginHorizontal:2,
      borderRadius:10,
      marginBottom:20,
      padding:15,
  }
});