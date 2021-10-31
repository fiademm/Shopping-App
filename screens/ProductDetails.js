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
  import { Entypo, Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
  import colors from '../colors';


import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext';

export function ProductDetails({route}) {
  const { productId } = route.params;
  const navigation = params.navigation;
  const [product, setProduct] = useState({});
  
  const { addItemToCart } = useContext(CartContext);
  
  useEffect(() => {
    setProduct(getProduct(productId));
  });
  
  function onAddToCart() {
    addItemToCart(product.id);
  }
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.white}}>
      <View style={styles.header}>
                <Ionicons name="arrow-back" size={28} onPress={() => navigation.navigate('Cart')} />
                <Entypo name="shopping-cart" size={28} color="black" onPress={() => navigation.navigate('Cart')} />                
      </View>
      <ScrollView>
        <View style={style.imageContainer}>
                <Image source={product.image} style={{resizeMode:"contain", flex:1}} />
        </View>
        <View style={style.detailsContainer}>
                <View 
                    style={{
                        marginLeft:20, 
                        flexDirection:"row", 
                        alignItems:"flex-end"
                    }}>
                        <View style={style.line}/>
                        <Text style={{fontSize:18, fontWeight:"bold"}}>Best Choice</Text>
                </View>
                <View style={{marginLeft:20, marginTop:20, flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
                    <Text style={{fontSize:22, fontWeight:"bold"}}> {product.name} </Text>
                    <View style={style.priceTag}>
                        <Text style={{marginLeft:15, color: colors.white, fontWeight:"bold", fontSize:16}}> {product.price} </Text>
                    </View>
                </View>
                <View style={{paddingHorizontal:20, marginTop:10, }}>

                    <Text style={{fontSize:20, fontWeight:"bold"}}>About</Text>
                    <Text style={{color:"grey", fontSize:16, lineHeight:22, marginTop:10}}> {product.description} </Text>

                    <View style={{marginTop:20, flexDirection:"row", justifyContent:"space-between" }}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <View style={style.borderBtn}>
                                <Text style={style.borderBtnText}>-</Text>
                            </View>
                            <Text style={{fontSize:20, marginHorizontal:10, fontWeight:"bold",}}> 1 </Text>
                            <View style={style.borderBtn}>
                                <Text style={style.borderBtnText}>-</Text>
                            </View>
                        </View>
                        <View style={style.buyBtn}>
                            <Text style={{color: colors.white, fontSize:18, fontWeight:"bold"}}>Buy</Text>
                        </View>
                    </View>
                </View>
            </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal:20,
    marginTop:20,
    flexDirection:"row",
    justifyContent: "space-between",
  },
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