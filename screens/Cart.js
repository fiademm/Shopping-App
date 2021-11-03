import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CartContext } from '../CartContext';

export function Cart ({navigation}) {

  const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
  
  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
       <View style={{justifyContent: 'center', alignItems: 'center'}}>
         <View style={styles.cartLineTotal}>
          <Text style={[styles.bblineLeft, styles.lineTotal]}>Total Cost  : </Text>
          <Text style={styles.bblineRight}>$ {total}</Text>
       </View>
       <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('Checkout')}>
        <Text style={{fontWeight: "bold", color:'#fff', fontSize: 17,}}>Proceed to Checkout</Text>
       </TouchableOpacity>
       </View>
    );
  }

  function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
         <View style={styles.cartLone}>
          <Text style={styles.lineLeft}>Name:</Text>
          <Text style={styles.lineRight}>{item.product.name}</Text>
         </View>
         <View style={styles.cartLone}>
          <Text style={styles.lineLeft}>Color:</Text>
          <Text style={styles.lineRight}>{item.product.color}</Text>
         </View>
         <View style={styles.cartLone}>
          <Text style={styles.lineLeft}>Size:</Text>
          <Text style={styles.lineRight}>{item.product.size}</Text>
         </View>
         <View style={styles.cartLone}>
          <Text style={styles.lineLeft}>Price:</Text>
          <Text style={styles.lineRight}>$ {item.product.price}</Text>
         </View>
         <View style={styles.cartLone}>
          <Text style={styles.lineLeft}>Quantity:</Text>
          <Text style={styles.lineRight}>{item.qty}</Text>
         </View>
         <View style={styles.ccartLone }>
          <Text style={styles.clineLeft}>Cost:</Text>
          <Text style={styles.cblineRight}>$ {item.totalPrice}  x {item.qty}</Text>
         </View>
       </View>
    );
  }
  
  return (
    <SafeAreaView>
      <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  continueBtn: {
    backgroundColor: '#000',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    margin: 10,
    width: 250,
    alignItems: "center",
  },
  cartLine: { 
    flexDirection: 'column',
    borderColor: '#222',
    borderTopWidth: 1,
    borderStyle: 'dotted',
    paddingHorizontal: 20,
    padding: 10,
    backgroundColor: '#000',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderRadius: 15,
    margin: 5,
  },
  cartLone: {
    flexDirection: 'row',
  },
  ccartLone: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    flexDirection: 'row',
    borderColor: 'white'
  },
  cartLineTotal: { 
    flexDirection: 'row',
    marginTop: 5,
    borderTopColor: '#000',
    borderTopWidth: 2,
    paddingHorizontal: 20,
    padding: 10,
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20,
    fontWeight: 'bold', 
    lineHeight: 40, 
    color:'#fff',
    fontStyle: 'italic', 
  },
  clineLeft: {
    fontSize: 20,
    fontWeight: 'bold', 
    lineHeight: 40, 
    color:'#fff',
    fontStyle: 'italic', 
  },
  bblineLeft: {
    fontSize: 20,
    fontWeight: 'bold', 
    lineHeight: 40, 
    color:'#000' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    lineHeight: 40,
    color:'#fff', 
    textAlign:'right',
    fontStyle: 'italic',
  },
  blineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold', 
    lineHeight: 40, 
    color:'#fff', 
    textAlign:'right',
  },
  cblineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold', 
    lineHeight: 40, 
    color:'#fff', 
    textAlign:'right',
  },
  bblineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold', 
    lineHeight: 40, 
    color:'#000', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
