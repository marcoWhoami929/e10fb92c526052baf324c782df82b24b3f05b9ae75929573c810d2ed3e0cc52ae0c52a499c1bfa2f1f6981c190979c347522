import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerDirection: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 300,
    marginBottom: 10,

    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#cccccc",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1.0,
    elevation: 0.5,
  },
  map: {
    width: "100%",
    height: 300,
  },
});
export default styles;
