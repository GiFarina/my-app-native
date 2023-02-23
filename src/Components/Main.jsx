import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Constants from "expo-constants";
import DataList from "./DataList";
import { StatusBar } from "expo-status-bar";
const imageback = {
  uri: "https://pm1.narvii.com/7807/33da173cc5275223020befda86b04ce0fa8c36c3r4-750-375_00.jpg",
};

function Main() {
  return (
    <ImageBackground source={imageback}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Native app</Text>
      <DataList style={styles.card} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: Constants.statusBarHeight,
    color: "white",
    fontWeight: "bold",
  },
  card: {
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default Main;
