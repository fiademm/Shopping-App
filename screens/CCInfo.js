import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function CCInfo(params) {
  const navigation = params.navigation;

  const [cardNumber, setCardNumber] = useState(0);
  const [holderName, setHolderName] = useState(0);
  const [expDate, setEDate] = useState(0);
  const [cvv, setCVC] = useState(0);

  const checkInput = (string) =>
  {
    if(typeof(cardNumber) !== "string"){  // check if the string variable is some type other than string
      alert('Please enter card number');
      return;
    }
    if(typeof(holderName) !== "string"){  // check if the string variable is some type other than string
      alert('Please enter card holder name');
      return;
    }
    if(typeof(expDate) !== "string"){  // check if the string variable is some type other than string
      alert('Please enter expiry date');
      return;
    }
    if(typeof(cvv) !== "string") {
      alert('Please enter CVV/CVC');
      return;
    }
    else {
      navigation.navigate('AcceptedOrder');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/wallpaper.jpg')} style={styles.bgImage}>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <TextInput 
              style = {styles.textInput}
              placeholder = "Card Number"
              underlineColorAndroid= "transparent"
              onChangeText={(value) => setCardNumber(value)}
            />
          </View>
          <View style={styles.inputContainer}>
          <TextInput 
            style = {styles.textInput}
            placeholder = "Card Holder Name"
            underlineColorAndroid= "transparent"
            onChangeText={(value) => setHolderName(value)}
          />
          </View>
          <View style={styles.inputContainer}>
          <TextInput 
            style = {styles.textInput}
            placeholder = "Expiry date (Month - Year)"
            underlineColorAndroid= "transparent"
            onChangeText={(value) => setEDate(value)}
          />
          </View>
          <View style={styles.inputContainer}>
          <TextInput 
            style = {styles.textInput}
            placeholder = "CVC/CVV"
            underlineColorAndroid= "transparent"
            onChangeText={(value) => setCVC(value)}
          />
          </View>
          
          <TouchableOpacity onPress={checkInput} style={styles.continueBtn}>
            <Text style={{fontWeight: "bold", fontSize: 17, backgroundColor: 'white'}}>Complete checkout</Text>
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
      padding: 5,
      paddingHorizontal: 20,
      width: 350,
      borderRadius: 10,
    },
    textInput: {
      padding: 15,
      fontSize: 15
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
    bgImage:{
      flex:1,
      position: "relative",
      width: '100%',
      height: '100%',
      justifyContent: "center"
    },
  }); 