import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    fontWeight: "normal",
    marginBottom: 12,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  skeletonText: {
    backgroundColor: "#ccc",
    width: "100%",
    height: 20,
    marginBottom: 8,
  },
});
