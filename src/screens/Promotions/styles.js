import { StyleSheet, Dimensions } from "react-native";
const { width: viewportWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
  containerScroll: {},

  imageContainer: {
    width: "90%",
    height: 600,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "5%",
    top: 5,
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
});
export default styles;
