import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";

export function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Image 
        style={{
          transform: [{ rotate: "45deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,
        }}
        source={{uri: 'https://as1.ftcdn.net/v2/jpg/03/44/12/00/1000_F_344120053_TndpC1HY8LCXHGaGReBDP1Z3H8Mvt5wD.jpg'}}
    />
    <Text style={{ fontSize: 30, color: "grey" }}>Welcome to</Text>
    <Text style={{ fontSize: 40, fontWeight: "bold" }}>Power Bike Shop</Text>

    {<View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your username"
        />
      </View>}
      {<View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your password"
        />
      </View>}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <Text style={{ paddingLeft: 10, color: "white" }}>Login</Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 5,
          paddingHorizontal: 50,
          marginTop: 20,
          alignItems: "center",
          borderColor: "black",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#e6e6e6",
        }}
      >
        <AntDesign name="google" size={24} color="black" />
        <Text style={{ paddingLeft: 10, color: "black" }}>Login with Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 5,
          paddingHorizontal: 50,
          marginTop: 10,
          alignItems: "center",
          borderColor: "black",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#0f0f0f",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Login with Apple</Text>
      </TouchableOpacity>

    </View>
  );
}