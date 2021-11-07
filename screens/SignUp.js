import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignUp(params) {
  const navigation = params.navigation;
  const [fname, setFName] = useState(0);
  const [lname, setLName] = useState(0);
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);

  const checkInput = (string) =>
  {
    if(typeof(fname) !== "string"){
      alert('Please enter first name');
      return;
    }
    if(typeof(lname) !== "string"){
      alert('Please enter last name');
      return;
    }
    if(typeof(email) !== "string"){ 
      alert('Please enter email');
      return;
    }
    if(typeof(password) !== "string") {
      alert('Please enter password');
      return;
    }
    else {
      navigation.navigate('Products');
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../assets/black.png')}>
      <View style={{justifyContent: "center", alignItems:"center"}}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="First name"
                underlineColorAndroid='transparent'
                onChangeText={(value) => setFName(value)}/>
            <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/ios/24/000000/user--v3.png"}}/>
          </View>
          
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Last name"
                underlineColorAndroid='transparent'
                onChangeText={(value) => setLName(value)}/>
            <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/ios/24/000000/user--v3.png"}}/>
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(value) => setEmail(value)}/>
            <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/ios/24/000000/new-post.png"}}/>
          </View>
          
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(value) => setPassword(value)}/>
            <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/ios/24/000000/password1--v2.png"}}/>
          </View>

          <TouchableOpacity style={styles.btnByRegister}>
              <Text style={styles.textByRegister}>By registering on this App you confirm that you have read and accept our policy</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              style={[styles.buttonContainer, styles.loginButton]} 
              onPress={checkInput}
          >
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.buttonContainer, {fontSize: 22}} onPress={() => {navigation.navigate('Login')}}>
              <Text style={styles.btnText}>Have an account?</Text>
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
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 200,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius:7,
    fontSize: 17,
    borderBottomColor: '#F5FCFF',
    borderBottomWidth: 1,
    marginBottom:20,
    width:350,
    height:55,
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
    width:170,
    borderRadius:15,
    backgroundColor:'transparent'
  },
    btnByRegister: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:5,
      width:300,
      backgroundColor:'transparent'
    },
    loginButton: {
      backgroundColor: "white",
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
      color: 'black',
      fontWeight: "bold",
      fontSize: 18
    },
    bgImage:{
      flex: 1,
      position: "relative",
      width: '100%',
      height: '100%',
      justifyContent: "center",
      resizeMode: "contain"
    },
    btnText:{
      color:"white",
      fontWeight:'bold',
      fontSize: 15
    },
    textByRegister:{
      color:"white",
      fontWeight:'bold',
      textAlign:'center',
  
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    }
  });