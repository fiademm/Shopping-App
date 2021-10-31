import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, ImageBackground, Image, StyleSheet, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Welcome (params) {
  const navigation = params.navigation;

  return (
    <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.bgImage} source={require('../assets/wallpaper.jpg')}>
              <Image source={require('../assets/black.png')} />
              <View style={{marginLeft: '10%'}}>
              <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('Login')}>
                    <Text style={{fontWeight: "bold", fontSize: 17,}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{fontWeight: "bold", fontSize: 17,}}>Sign up</Text>
              </TouchableOpacity>
              </View>
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
        margin: 5,
        width: 300,
        alignItems: "center",
    },
    
    bgImage:{
      flex: 1,
      position: 'relative',
      width: '100%',
      height: '100%',
      justifyContent: "center",
    },
    btnText:{
      color:"white",
      fontWeight:'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    },
  }); 