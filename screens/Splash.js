import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, ImageBackground, StyleSheet, Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";


export function Splash (params) {
  const navigation = params.navigation;

  return (
    <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.bgImage} source={require('../assets/black.png')}>
                <Image source={require('../assets/dhh.png')} style={{backgroundColor: 'black', height:500, width: "100%", resizeMode:"contain"}} />
                <Image source={require('../assets/dhl.png')} style={{backgroundColor: 'black', height:100, width: "100%", resizeMode:'contain'}} />
                <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={{fontWeight: "bold", fontSize: 17,}}>Continue</Text>
                </TouchableOpacity>
            </ImageBackground>
        <StatusBar style={"auto"}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    continueBtn: {
        backgroundColor: '#fff',
        padding: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        alignItems: "center"
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:300,
      borderRadius:30,
      backgroundColor:'transparent'
    },
    btnByRegister: {
      height:15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:20,
      width:300,
      backgroundColor:'transparent'
    },
    bgImage:{
      flex: 1,
      position: 'relative',
      resizeMode: "contain",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      justifyContent: "center",
      alignItems: "center",
    },
    btnText:{
      color:"white",
      fontWeight:'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    },
  }); 