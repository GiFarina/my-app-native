import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Buttom = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "green",
        padding: 5,
        width: 125,
        borderRadius: 5,
      }}
      onPress={() => alert("Agregaste un producto")}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>
        Agregar Producto
      </Text>
    </TouchableOpacity>
  );
};

export default Buttom;
