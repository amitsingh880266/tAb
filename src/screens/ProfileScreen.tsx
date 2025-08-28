import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import styles from "./profileScreenStyles";

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

export default ProfileScreen;
