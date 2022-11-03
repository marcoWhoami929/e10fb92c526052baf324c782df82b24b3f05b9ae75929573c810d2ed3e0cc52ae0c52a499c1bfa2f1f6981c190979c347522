import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: "center",
    borderRadius: 180,
    width: 80,
    height: 80,
    padding: 8,
    margin: 10,
    backgroundColor: "#0036AE",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  btnContainerBack: {
    alignItems: "center",
    borderRadius: 180,
    width: 50,
    height: 50,
    padding: 8,
    margin: 0,
    backgroundColor: "#0036AE",
  },
  btnIcon: {
    height: 15,
    width: 15,
  },
});

export default styles;
