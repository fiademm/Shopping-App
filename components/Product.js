import React from 'react';
import {Text, Image, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { Entypo, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const width = Dimensions.get('screen').width/2-30;
export function Product({name, price, color, image, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
        <View style={{alignItems:"flex-end"}}>
            <View style={{
                width:30, 
                height:30, 
                borderRadius:15, 
                alignItems:"center", 
                justifyContent:"center",
            }}>
                <MaterialIcons name="favorite" size={18} />
            </View>
        </View>
        <View style={{height: 100, alignItems: "center"}}>
            <Image style={{ flex:1, resizeMode:"contain"}} source={image} />
        </View>
        <Text style={{fontWeight:"bold", fontSize: 17, marginTop: 10}}> {name + ' - ' + color} </Text>

        <View style={{flexDirection:"row", justifyContent: "space-between", marginTop:5}}>
            <Text style={{fontSize:19, fontWeight:"bold",}}>${price}</Text>
            <View style={{height:25, width:25, backgroundColor: '#00b761', borderRadius:5, justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:22, color: '#fff', fontWeight:"bold"}}>+</Text>
            </View>
        </View>
    </View>; 
</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection:'row',
  },
  card: {
    height: 225,
    backgroundColor: '#f1f1f1',
    width,
    marginHorizontal:2,
    borderRadius:10,
    marginBottom:20,
    padding:15,
 },
  thumb: {
    height: 500,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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
});
