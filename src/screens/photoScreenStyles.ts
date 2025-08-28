import { StyleSheet } from "react-native";
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

export default styles;
