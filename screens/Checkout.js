import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Checkout(params) {
  const navigation = params.navigation;
  const [fname, setFName] = useState(0);
  const [lname, setLname] = useState(0);
  const [address, setAddress] = useState(0);
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState(0);

  const checkInput = (string) =>
  {
    if(typeof(fname) !== "string"){  // check if the string variable is some type other than string
      alert('Please enter first name');
      return;
    }
    if(typeof(lname) !== "string"){  // check if the string variable is some type other than string
      alert('Please enter last name');
      return;
    }
    if(typeof(address) !== "string"){  // check if the string variable is some type other than string
      alert('Please enter address');
      return;
    }
    if(typeof(phone) !== "string"){  // check if the string variable is some type other than string
      alert('Please enter phone');
      return;
    }
    if(typeof(email) !== "string") {
      alert('Please enter email');
      return;
    }
    else {
      navigation.navigate('CCInfo');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/wallpaper.jpg')} style={styles.bgImage}>
        <View style={styles.mainContainer}>
          <View style={styles.ainputContainer}>
            <View style={styles.labinputContainer}>
            <TextInput 
              style = {styles.textInput}
              placeholder = "First name"
              underlineColorAndroid= "transparent"
              onChangeText={(value) => setFName(value)}
            />
            </View>
            <View style={styles.rabinputContainer}>
            <TextInput 
              style = {styles.textInput}
              placeholder = "Last name"
              underlineColorAndroid= "transparent"
              onChangeText={(value) => setLname(value)}
            />
            </View>
          </View>
          <View style={styles.inputContainer}>
          <TextInput 
            style = {styles.textInput}
            placeholder = "Address"
            underlineColorAndroid= "transparent"
            onChangeText={(value) => setAddress(value)}
          />
          </View>
          <View style={styles.inputContainer}>
          <TextInput 
            style = {styles.textInput}
            placeholder = "Phone"
            underlineColorAndroid= "transparent"
            onChangeText={(value) => setPhone(value)}
          />
          </View>
          <View style={styles.inputContainer}>
          <TextInput 
            style = {styles.textInput}
            placeholder = "Email"
            underlineColorAndroid= "transparent"
            onChangeText={(value) => setEmail(value)}
          />
          </View>
          
          <TouchableOpacity onPress={checkInput} style={styles.continueBtn}>
            <Text style={{fontWeight: "bold", fontSize: 17, backgroundColor: 'white'}}>Continue to Payment info</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#DCDCDC',
    },
    mainContainer: {
      justifyContent: 'center',
      alignItems: "center",
      marginBottom: 20,
    },
    inputContainer: {
      backgroundColor: 'white',
      margin: 10,
      paddingHorizontal: 20,
      width: 370,
      borderRadius: 10,
    },
    ainputContainer: {
      flexDirection: "row",
    },
    labinputContainer: {
      backgroundColor: 'white',
      margin: 5,
      paddingHorizontal: 10,
      width: 180,
      borderRadius: 10,
    },
    rabinputContainer: {
      backgroundColor: 'white',
      margin: 5,
      paddingHorizontal: 10,
      width: 180,
      borderRadius: 10,
    },
    textInput: {
      padding: 15,
      fontSize: 15,
    },
    textInput: {
      padding: 15,
      fontSize: 15,
    },
    continueBtn: {
      backgroundColor: '#fff',
      padding: 15,
      paddingHorizontal: 20,
      borderRadius: 30,
      margin: 20,
      width: 250,
      alignItems: "center",
      shadowColor: 'blue',
    },
    bgImage:{
      flex:1,
      position: "relative",
      width: '100%',
      height: '100%',
      justifyContent: "center"
    },
  }); 