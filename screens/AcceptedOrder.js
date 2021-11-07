import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackHandler } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../colors';

export function AcceptedOrder (params) {
    const navigation = params.navigation;

    return (
      <SafeAreaView 
        style={styles.container}>
          <ImageBackground style={styles.bgImage} source={require('../assets/black.png')}>
            <View style={{backgroundColor: '#fafafa', borderRadius:15, marginHorizontal:15, marginBottom:20, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{marginTop: 10}}>
              <Entypo name="thumbs-up" size={40} color="black" />
            </View>
            <Text style={styles.title}>
                Congratulations, order checked out succesfully.
            </Text>
            <View style={{padding:2, borderColor: 'white', borderWidth:2, borderBottomLeftRadius:10, borderBottomRightRadius:10, backgroundColor: '#111', color: colors.light}}>
              <Text style={styles.description}>
                  Thank you for shopping with the Drip House.
              </Text>
            </View>
            </View>
              <TouchableHighlight style={styles.continueBtn} onPress={() => {navigation.navigate('Products');}}>
                <Text style={{fontWeight: "bold", fontSize: 17, color: 'black'}}>Continue shopping</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.continueBtn} onPress={()=> BackHandler.exitApp()}>
                  <Text style={{fontWeight: "bold", fontSize: 17,}}>Exit</Text>
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
    opacity: 80
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
  },
  description: {
    textAlign: 'center',
    color: "#fff",
    fontWeight: 'bold',
    fontSize:17,
    margin: 5,
  },
  descriptionn: {
    textAlign: 'center',
    color: "#fff",
    fontSize:19,
    marginTop: 11,
    fontWeight: 'bold',
    borderRadius: 15,
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
