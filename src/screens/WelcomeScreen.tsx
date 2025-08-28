import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./welcomeScreenStyles";
const WelcomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/introduction-image.png")}
        style={styles.background}
      ></Image>
      <View style={styles.rectangle}>
        <Text style={styles.multilineText}>
          Hi, I am your fashion advisor. Let's get you started with creating
          your mix & match fashion avatar.
        </Text>
        <TouchableOpacity
          style={styles.arrowTouchable}
          onPress={() => navigation.navigate("PhotoScreen")}
        >
          <Image
            source={require("../assets/arrow-right-circle.png")}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
