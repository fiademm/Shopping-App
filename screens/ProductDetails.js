import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  StyleSheet,
  TouchableOpacity
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
                        <Text style={{fontSize:18, fontWeight:"bold"}}>Best Choice</Text>
                </View>
                <View style={{marginLeft:20, marginTop:20, flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
                    <Text style={{fontSize:22, fontWeight:"bold"}}> {product.name} </Text>
                    <View style={style.priceTag}>
                        <Text style={{marginLeft:15, color: colors.white, fontWeight:"bold", fontSize:16}}>$  {product.price} </Text>
                    </View>
                </View>


                <View style={{paddingHorizontal:20, marginTop:10, }}>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>Description</Text>
                    <Text style={{color:"grey", fontSize:16, lineHeight:22, marginTop:10}}> {product.description} </Text>

                    <View style={{marginTop:20, flexDirection:"row", alignItems:'center', justifyContent:"center", marginBottom:10 }}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <View style={style.borderBtn}>
                                <Text style={style.borderBtnText}>-</Text>
                            </View>
                            <Text style={{fontSize:20, marginHorizontal:10, fontWeight:"bold",}}> 1 </Text>
                            <View style={style.borderBtn}>
                                <Text onPress={onAddToCart} style={style.borderBtnText}>+</Text>
                            </View>
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
                    <TouchableOpacity style={[style.btnColor, {backgroundColor:"#00BFFF"}]}></TouchableOpacity> 
                    <TouchableOpacity style={[style.btnColor, {backgroundColor:"#FF1493"}]}></TouchableOpacity> 
                    <TouchableOpacity style={[style.btnColor, {backgroundColor:"#00CED1"}]}></TouchableOpacity> 
                    <TouchableOpacity style={[style.btnColor, {backgroundColor:"#228B22"}]}></TouchableOpacity> 
                    <TouchableOpacity style={[style.btnColor, {backgroundColor:"#20B2AA"}]}></TouchableOpacity> 
                    <TouchableOpacity style={[style.btnColor, {backgroundColor:"#FF4500"}]}></TouchableOpacity> 
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
    imageContainer: {
        flex: 0.50,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    detailsContainer: {
        flex: 0.50,
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
        backgroundColor: '#000',
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
        backgroundColor: '#000',
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 30,
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