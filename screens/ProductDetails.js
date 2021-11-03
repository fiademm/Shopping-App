import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';

import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext';
import colors from '../colors';
import { CartIcon } from '../components/CartIcon.js';

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
    <SafeAreaView style={{flex:1, backgroundColor:colors.white}}>
      <ScrollView>
            <View style={style.imageContainer}>
                <Image source={product.image} style={{resizeMode:"contain", width:'100%', flex:1}} />
            </View>
            <View style={style.detailsContainer}>
                <View 
                    style={{
                        marginLeft:20, 
                        flexDirection:"row", 
                        alignItems:"flex-end"
                    }}>
                        <View style={style.line}/>
                        <Text style={{fontSize:18, color: colors.white, fontWeight:"bold"}}>Best Choice</Text>
                </View>
                <View style={{marginLeft:20, marginTop:20, flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
                    <Text style={{fontSize:22, color: colors.white, fontWeight:"bold"}}> {product.name} - {product.color} </Text>
                    <View style={style.priceTag}>
                        <Text style={{marginLeft:15, color: colors.dark, fontWeight:"bold", fontSize:18}}>$  {product.price} </Text>
                    </View>
                </View>


                <View style={{paddingHorizontal:20, marginTop:10, }}>
                    <Text style={{fontSize:20, color: colors.white, fontWeight:"bold"}}> Size {product.size}</Text>
                    <Text style={{fontSize:20, color: colors.white, fontWeight:"bold"}}></Text>
                    <Text style={{fontSize:20, color: colors.white, fontWeight:"bold"}}>Description</Text>
                    <Text style={{color:"white", fontStyle: 'italic', fontSize:16, lineHeight:22, marginTop:10}}> {product.description} </Text>

                    <View style={{marginTop:20, flexDirection:"row", alignItems:'center', justifyContent:"center", marginBottom:10 }}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <TouchableOpacity style={style.borderBtn}>
                                <Text style={style.borderBtnText}>-</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize:20, color: colors.white, marginHorizontal:10, fontWeight:"bold",}}> 1 </Text>
                            <TouchableOpacity style={style.borderBtn}>
                                <Text onPress={onAddToCart} style={style.borderBtnText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={style.starContainer}>
                    <Image style={style.star} source={{uri:"https://img.icons8.com/color/48/000000/filled-star--v1.png"}}/>
                    <Image style={style.star} source={{uri:"https://img.icons8.com/color/48/000000/filled-star--v1.png"}}/>
                    <Image style={style.star} source={{uri:"https://img.icons8.com/color/48/000000/star-half-empty.png"}}/>
                    <Image style={style.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
                    <Image style={style.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
                </View>
                <View style={style.contentColors}>
                    <TouchableOpacity style={[style.btnColor, {borderWidth:1.5, borderColor:'white', backgroundColor:"#00BFFF"}]}></TouchableOpacity> 
                    <TouchableOpacity style={[style.btnColor, {borderWidth:1.5, borderColor:'white', backgroundColor:"#FF1493"}]}></TouchableOpacity> 
                    <TouchableOpacity style={[style.btnColor, {borderWidth:1.5, borderColor:'white', backgroundColor:"#00CED1"}]}></TouchableOpacity> 
                    <TouchableOpacity style={[style.btnColor, {borderWidth:1.5, borderColor:'white', backgroundColor:"#228B22"}]}></TouchableOpacity> 
                    <TouchableOpacity style={[style.btnColor, {borderWidth:1.5, borderColor:'white', backgroundColor:"#20B2AA"}]}></TouchableOpacity> 
                    <TouchableOpacity style={[style.btnColor, {borderWidth:1.5, borderColor:'white', backgroundColor:"#FF4500"}]}></TouchableOpacity> 
                </View>
                <View style={style.contentSize}>
                    <TouchableOpacity style={style.btnSize}><Text>39</Text></TouchableOpacity> 
                    <TouchableOpacity style={style.btnSize}><Text>40</Text></TouchableOpacity> 
                    <TouchableOpacity style={style.btnSize}><Text>41</Text></TouchableOpacity> 
                    <TouchableOpacity style={style.btnSize}><Text>42</Text></TouchableOpacity> 
                </View>
            </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
    header: {
        paddingHorizontal:20,
        marginTop:20,
        flexDirection:"row",
        justifyContent: "space-between",
    },
    continueBtn: {
        backgroundColor: '#000',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        margin: 10,
        width: 250,
        alignItems: "center",
      },
    imageContainer: {
        flex: 0.50,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    detailsContainer: {
        flex: 0.50,
        backgroundColor: colors.dark,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 2,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginTop: 30,
        paddingTop: 30,
        paddingBottom: 20,
    },
    line: {
        width:25,
        height:2,
        backgroundColor: colors.light,
        marginBottom: 5,
        marginRight: 3,
    },
    priceTag: {
        backgroundColor: '#fff',
        width: 80,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center',
    },
    borderBtn: {
        borderColor: "white",
        borderWidth: 2.5,
        borderRadius: 5,
        padding: 5,
        height: 40,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
    },
    borderBtnText: {
        fontWeight: "bold",
        fontSize: 20,
        color: 'white',
    },
    starContainer:{
        marginHorizontal:20, 
        flexDirection:'row', 
        marginTop:10,
        justifyContent: 'center'
    },
    star:{
        width:40,
        height:40,
    },
    contentColors:{ 
        justifyContent:'center', 
        marginHorizontal:30, 
        flexDirection:'row', 
        marginTop:20
    },
    btnColor: {
        height:30,
        width:30,
        borderRadius:30,
        marginHorizontal:3
    },
    contentSize:{ 
        justifyContent:'center', 
        marginHorizontal:30, 
        flexDirection:'row', 
        marginTop:20
    },
    btnSize: {
        height:40,
        width:40,
        borderRadius:40,
        borderColor:'#778899',
        borderWidth:1,
        marginHorizontal:3,
        backgroundColor:'white',
    
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
});