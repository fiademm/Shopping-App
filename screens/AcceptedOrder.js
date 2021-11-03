import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHandler } from 'react-native';

export function AcceptedOrder (params) {
    const navigation = params.navigation;

    return (
      <SafeAreaView 
        style={styles.container}>
          <ImageBackground style={styles.bgImage} source={require('../assets/black.png')}>
            <View style={{backgroundColor: '#fafafa', borderRadius:15, marginHorizontal:15, marginBottom:20, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                style={styles.icon} 
                source={{uri: "https://img.icons8.com/color/70/000000/facebook-like.png"}} />
            <Text style={styles.title}>
                Congratulations, your order has been accepted.
            </Text>
            <View style={{padding:20, borderColor: 'white', borderWidth:2, borderBottomLeftRadius:15, borderBottomRightRadius:15, backgroundColor: '#111', color: 'white'}}>
              <Text style={styles.description}>
                  Thank you for shopping with the Drip House, we look foward to seeing you next time. We hope you enjoy the product.
              </Text>
              <Text style={styles.descriptionn}>
                  We wish you all the best.
              </Text>
            </View>
            </View>
              <TouchableHighlight style={styles.continueBtn} onPress={() => {navigation.navigate('Products');}}>
                <Text style={{fontWeight: "bold", fontSize: 17, color: 'black'}}>Continue shopping</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.continueBtn} onPress={()=> BackHandler.exitApp()}>
                  <Text style={{fontWeight: "bold", fontSize: 17,}}>Go Home</Text>
              </TouchableHighlight>
          </ImageBackground>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    paddingTop:50,
  },
  bgImage:{
    flex: 1,
    position: "relative",
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: 'center',
    resizeMode: 'contain',
  },
  continueBtn: {
    backgroundColor: '#fff',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    margin: 10,
    width: 250,
    alignItems: "center",
  },
  icon:{
    width:120,
    height:120,
  },
  title:{
    fontSize:24,
    textAlign: 'center',
    marginTop:5,
    color: "#000111",
    padding:10,
    fontStyle: 'italic'
  },
  description: {
    textAlign: 'center',
    color: "#fff",
    fontSize:17,
    margin: 5,
    fontStyle: 'italic',
  },
  descriptionn: {
    textAlign: 'center',
    backgroundColor: 'white',
    color: "#000",
    fontSize:19,
    margin: 5,
    fontStyle: 'italic',
    borderRadius: 15,
    padding: 15
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    margin: 10,
  },
  loginButton: {
    backgroundColor: "#3498db",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize:20,
  }
});
