import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 0,
    paddingBottom: 0,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  subtitle: { fontSize: 16, marginBottom: 32 },
  background: {
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    width: 300,
  },
  rectangle: {
    width: 300,
    minHeight: 120,
    padding: 16,
    marginBottom: 16,
    position: "relative",
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  multilineText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 32,
  },
  arrowTouchable: {
    position: "absolute",
    right: 12,
    bottom: 12,
  },
  arrow: {
    width: 32,
    height: 32,
  },
});

export default WelcomeScreen;
