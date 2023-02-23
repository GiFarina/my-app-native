import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Home  () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a mi aplicación!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Home;
