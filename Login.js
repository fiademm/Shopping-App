import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function Login(params) {
  const navigation = params.navigation;

  const [email, setEmail] = useState(0);
  const [password, setpassword] = useState(0);

  const checkInput = (string) =>
  {
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
        <ImageBackground style={styles.bgImage} source={require('./assets/black.png')}>
          <View style={{marginBottom: '5%', justifyContent: "center", alignItems:"center"}}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                  placeholder="Email"
                  keyboardType="email-address"
                  underlineColorAndroid='transparent'
                  onChangeText={(value) => setEmail(value)}/>
              <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
            </View>
            
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  onChangeText={(value) => setpassword(value)}/>
              <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
            </View>

            <TouchableOpacity style={styles.btnForgotPassword} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.btnText}>Forgot your password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.continueBtn} onPress={checkInput}>
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
    padding: 10,
    borderRadius: 12,
    margin: 7,
    width: 180,
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
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnForgotPassword: {
    height:30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom:5,
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
    fontSize: 18,
  },
  bgImage:{
    flex: 1,
    position: "relative",
    width: '100%',
    height: '100%',
    justifyContent: "center",
  },
  btnText:{
    color:"white",
    fontWeight:'bold',
    fontSize: 15
  }
});