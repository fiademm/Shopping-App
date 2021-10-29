import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";

export function Login(params) {
  const navigation = params.navigation;

  return (
    <View style={styles.container}>
        <Image style={styles.bgImage} source={{ uri: "https://lorempixel.com/900/1400/nightlife/2/" }}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>

        <TouchableOpacity style={styles.btnForgotPassword} onPress={() => Alert.alert('restore_password')}>
            <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.buttonContainer, styles.loginButton]} 
          onPress={() => {navigation.navigate('Products');
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity 
          style={styles.buttonContainer}
          onPress={() => {navigation.navigate('SignUp');
        }}
        >
            <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
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
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:15,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",
    marginTop:10,
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
  }
});