import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import DataList from "./DataList";
import { StatusBar } from "expo-status-bar";

function Main() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <StatusBar style="dark" />

      <Text style={styles.title}>Native app</Text>
      <DataList style={styles.card} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  card: {
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default Main;
