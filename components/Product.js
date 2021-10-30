import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {Text, Image, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import colors from '../screens/colors';

const width = Dimensions.get('screen').width/2-30;
export function Product({name, price, color, image, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={style.card}>
        <View style={{alignItems:"flex-end"}}>
            <View style={{
                width:30, 
                height:30, 
                borderRadius:15, 
                alignItems:"center", 
                justifyContent:"center",
                backgroundColor: image.like ? 'rgba(245, 42, 42, 0.2)' : 'rgba(0, 0, 0, 0.2)',
            }}>
                <MaterialIcons
                    name="favorite" 
                    size={18} 
                    color={image.like ? colors.red : colors.dark} 
                />
            </View>
        </View>
        <View style={{
            height: 100,
            alignItems: "center"
        }}>
            <Image
                style={{
                    flex:1,
                    resizeMode:"contain"
                }} 
                source={image} 
            />
        </View>
        <Text style={{ fontWeight:"bold", fontSize: 17, marginTop: 10}}> {name + ' - ' + color} </Text>
        <View style={{ flexDirection:"row", justifyContent: "space-between", marginTop:5}}>
            <Text style={{fontSize:19, fontWeight:"bold",}}> ${price} </Text>
            <View style={{height:25, width:25, backgroundColor: colors.green, borderRadius:5, justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:22, color: colors.white, fontWeight:"bold"}}> + </Text>
            </View>
        </View>
    </View>; 
</TouchableOpacity>
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