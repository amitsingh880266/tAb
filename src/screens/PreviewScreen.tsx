import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Loader from "../components/Loader";

const PreviewScreen = ({ route, navigation }: any) => {
  const { photo } = route.params;
  return (
    <View style={styles.container}>
      <Image source={require("../assets/success.png")} style={styles.image} />

      <Text style={styles.subtitle}>Selfie captured perfectly!</Text>
      <Text style={styles.subtitle}>Let's build your own fashion avatar</Text>

      <View style={styles.loaderWrapper}>
        <Loader />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  loaderWrapper: {
    width: "80%",
    marginTop: 16,
  },
});

export default PreviewScreen;
