import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ProfileScreen = ({ navigation, route }: any) => {
  const [name, setName] = useState("");
  const { photo } = route.params || {};

  const handleComplete = () => {
    navigation.navigate("CompletionScreen", { name, photo });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Complete Profile" onPress={handleComplete} />
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
  input: {
    width: 200,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default ProfileScreen;
