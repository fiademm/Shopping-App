import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableHighlight } from "react-native-gesture-handler";
import colors from "../colors";


export function Confirmation(params) {
  const navigation = params.navigation;

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.bgImage} source={require('../assets/black.png')}>
          <View style={{width: "40%", borderRadius:10, borderColor: colors.light, borderWidth: 2, justifyContent: "center", alignItems:"center"}}>
            <View style={{borderBottomWidth: 2, width: "100%", justifyContent:"center", alignItems:"center", padding:10, borderBottomColor: colors.white}}>
                <Text style={{color: colors.white, fontSize: 26}}>Order Confimation</Text>
            </View>
            <View>
                <Text style={{color: colors.white, fontSize: 22, padding:10}}>
                    Do you wish to proceed with order?
                </Text>
            </View>
            <View style={{flexDirection:"row", margin: 10, justifyContent: "center",}}>
                <TouchableHighlight style={styles.continueBtn} onPress={() => navigation.navigate('AcceptedOrder')}>
                    <Text style={{fontWeight:"bold"}}>Yes</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.continueBtn} onPress={() => navigation.navigate('Products')}>
                    <Text style={{fontWeight:"bold"}}>No</Text>
                </TouchableHighlight>
            </View>
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
    borderRadius: 30,
    margin: 10,
    width: 80,
    alignItems: "center",
  },
  bgImage:{
    flex: 1,
    position: "relative",
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: '80%'
  },
});