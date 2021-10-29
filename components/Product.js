import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Product({name, price, color, image, onPress}) {
  return (
    <View style={[styles.maincontainer]}>
      <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.thumb}
          source={image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name + ' - ' + color}</Text>
          <Text style={styles.price}>$ {price}</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection:'row',
  },
  card: {
    flex:1,
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
    marginVertical: 20
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
