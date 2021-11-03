import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

export function AcceptedOrder (params) {
    const navigation = params.navigation;

    return (
      <View 
        style={styles.container}>
        <Image 
            style={styles.icon} 
            source={{uri: "https://img.icons8.com/color/70/000000/facebook-like.png"}} />
        <Text 
            style={styles.title}
        >
            Congratulations, your order is successfully accepted.
        </Text>
        <View>
        <Text style={styles.description}>
            Thank you for shopping with the Drip House, we look foward to seeing you next time. We hope you enjoy the product.
        </Text>
        <Text style={styles.description}>
            We wish you all the best.
        </Text>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => {navigation.navigate('Products');}}>
          <Text style={styles.buttonText}>Continue shopping</Text>
        </TouchableHighlight>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    paddingTop:50,
  },
  icon:{
    width:120,
    height:120,
  },
  title:{
    fontSize:24,
    textAlign: 'center',
    marginTop:22,
    color: "#5F6D7A"
  },
  description: {
    textAlign: 'center',
    color: "#A9A9A9",
    fontSize:17,
    margin: 5,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    margin: 10
  },
  loginButton: {
    backgroundColor: "#3498db",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize:20,
  }
});
