import { StyleSheet } from "react-native";

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

export default styles;
