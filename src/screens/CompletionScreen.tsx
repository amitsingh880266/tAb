import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CompletionScreen = ({ route }: any) => {
  const { name, photo } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Created!</Text>
      {photo && <Image source={{ uri: photo.uri }} style={styles.image} />}
      <Text style={styles.subtitle}>Welcome, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  subtitle: { fontSize: 18, marginTop: 16 },
  image: { width: 200, height: 200, marginTop: 16 },
});

export default CompletionScreen;
