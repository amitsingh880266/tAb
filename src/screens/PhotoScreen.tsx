import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "react-native-image-picker";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: { width: 200, height: 200, marginTop: 16 },
  buttonRow: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  iconColumn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  iconSmall: {
    width: 32,
    height: 32,
    resizeMode: "contain",
    marginBottom: 4,
  },
  iconLabel: {
    fontSize: 14,
    color: "#333",
  },
  header: {
    width: "100%",
    marginTop: 40,
  },
  headerTitle: {
    paddingLeft: 10,
    fontSize: 12,
    color: "#555",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    paddingLeft: 10,
    marginBottom: 8,
  },
  headerLine: {
    width: "100%",
    height: 1,
    backgroundColor: "grey",
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 1,
  },
  faceContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  facePlaceholder: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    borderRadius: 60,
    top: 120,
    backgroundColor: "#eee",
  },
  uploadedPhotoContainer: {
    height: 220,
    width: 220,
    borderRadius: 110,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "green",
    backgroundColor: "#eee",
    top: 120,
  },
  uploadButton: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "black",
    marginEnd: 30,
    marginStart: 30,
    borderRadius: 5,
  },
});
