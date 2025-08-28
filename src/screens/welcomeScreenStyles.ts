import { StyleSheet } from "react-native";

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

export default styles;
