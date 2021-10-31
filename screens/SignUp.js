import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";

export function SignUp(params) {
  const navigation = params.navigation;
  const [name, setName] = useState(0);
  const [email, setEmail] = useState(0);
  const [password, setpassword] = useState(0);

  const checkInput = (string) =>
  {
    if(typeof(name) !== "string"){  // check if the string variable is some type other than string
      alert('Please enter name');
      return;
    }
    if(typeof(email) !== "string"){  // check if the string variable is some type other than string
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
    <View style={styles.container}>
        <Image style={styles.bgImage} source={require('../assets/wallpaper.jpg')}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              underlineColorAndroid='transparent'
              onChangeText={(value) => setName(value)}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/circled-user-male-skin-type-3.png'}}/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(value) => setEmail(value)}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/flat_round/40/000000/secured-letter.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(value) => setpassword(value)}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
        </View>

        <TouchableOpacity style={styles.btnByRegister} onPress={() => {Alert.alert('Okayy')}}>
            <Text style={styles.textByRegister}>By registering on this App you confirm that you have read and accept our policy</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={[styles.buttonContainer, styles.loginButton]} 
            onPress={checkInput}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => {navigation.navigate('Login')}}>
            <Text style={styles.btnText}>Have an account?</Text>
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
    btnByRegister: {
      height:15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:20,
      width:300,
      backgroundColor:'transparent'
    },
    loginButton: {
      backgroundColor: "#00b5ec",
  
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
      justifyContent: 'center',
    },
    btnText:{
      color:"white",
      fontWeight:'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
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