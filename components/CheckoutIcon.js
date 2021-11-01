
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export function CheckoutIcon({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Checkout');
        }}
      >
          Checkout
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: '#000',
    height: 32,
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});