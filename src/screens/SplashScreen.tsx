import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import Loader from "../components/Loader";

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("WelcomeScreen");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.loaderWrapper}>
        <Loader />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  loaderWrapper: {
    position: "absolute",
    bottom: 40,
    left: 30,
    right: 30,
    paddingHorizontal: 20,
  },
});

export default SplashScreen;
