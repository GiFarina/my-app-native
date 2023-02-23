import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import data from "../data/data";
import Buttom from "./Buttom";


const DataList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item: data }) => (
        <View style={styles.card}>
          <View key={data.id} style={styles.container}>
            <View style={styles.firstColumn}>
              <Text style={styles.text}>{data.title}</Text>
              <Text>{data.ingredients}</Text>
              <Image style={styles.image} source={{ uri: data.image }} />
            </View>
            <View style={styles.column}>
              <View style={styles.row}>
                <Text>{data.description}</Text>
              </View>
              <View>
                <Text style={styles.text}>{data.price}</Text>
              </View>
              <View style={styles.button}>
                <Buttom />
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "center",
    backgroundColor: "#e0ffffAA",
  },

  text: {
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 15,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },

  picture: {
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    resizeMode: "cover",
    flex: 1,
  },

  column: {
    marginVertical: 50,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "60%",
    height: 150,
  },

  firstColumn: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginRight: 10,
    width: "40%",
    height: 150,
    marginVertical: 10,
  },
  button: {
    marginLeft: 50,
    marginTop: -22,
  },
  card: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    borderStyle: "solid",
  },
});

export default DataList;
