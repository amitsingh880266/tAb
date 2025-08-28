import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import Loader from "../components/Loader";

import styles from "./splashScreenStyles";

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

export default SplashScreen;
