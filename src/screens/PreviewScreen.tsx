import React from "react";
import { View, Image, Text } from "react-native";
import Loader from "../components/Loader";

import styles from "./previewScreenStyles";

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

export default PreviewScreen;
