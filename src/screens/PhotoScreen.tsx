import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "react-native-image-picker";

import styles from "./photoScreenStyles";
const PhotoScreen = ({ navigation }: any) => {
  const [photo, setPhoto] = useState<any>(null);

  const pickImage = () => {
    ImagePicker.launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (
        !response.didCancel &&
        !response.errorCode &&
        response.assets &&
        response.assets.length > 0
      ) {
        setPhoto(response.assets[0]);
      }
    });
  };

  const takePhoto = () => {
    ImagePicker.launchCamera({ mediaType: "photo" }, (response) => {
      if (
        !response.didCancel &&
        !response.errorCode &&
        response.assets &&
        response.assets.length > 0
      ) {
        setPhoto(response.assets[0]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Facial attributes</Text>
        <Text style={styles.headerSubtitle}>Let's add a Photo</Text>
        <View style={styles.headerLine} />
      </View>
      <View style={styles.faceContainer}>
        {photo ? (
          <View style={styles.uploadedPhotoContainer}>
            <Image source={{ uri: photo.uri }} style={styles.image} />
          </View>
        ) : (
          <Image
            source={require("../assets/face-placeholder.png")}
            style={styles.facePlaceholder}
          />
        )}
      </View>
      {!photo && (
        <View style={styles.buttonRow}>
          <View style={styles.iconColumn}>
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={require("../assets/photo.png")}
                style={styles.iconSmall}
              />
            </TouchableOpacity>
            <Text style={styles.iconLabel}>From Gallery</Text>
          </View>
          <View style={styles.iconColumn}>
            <TouchableOpacity onPress={takePhoto}>
              <Image
                source={require("../assets/camera.png")}
                style={styles.iconSmall}
              />
            </TouchableOpacity>
            <Text style={styles.iconLabel}>Take a selfie</Text>
          </View>
        </View>
      )}
      {photo && (
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => navigation.navigate("PreviewScreen", { photo: photo })}
        >
          <Text style={{ color: "white", padding: 10, fontSize: 16 }}>
            UPLOAD
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PhotoScreen;
