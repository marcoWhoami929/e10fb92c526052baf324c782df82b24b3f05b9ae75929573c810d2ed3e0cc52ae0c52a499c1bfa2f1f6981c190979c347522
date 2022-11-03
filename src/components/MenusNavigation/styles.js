import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerButtonContainer: {
    padding: 10,
  },
  headerButtonImage: {
    justifyContent: "center",
    width: 25,
    height: 25,
    margin: 6,
  },
  icon: {
    paddingLeft: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 100,
  },
  btnContainer: {
    alignItems: "center",
    borderRadius: 180,
    width: 50,
    height: 50,
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
  itemsCart: {
    alignItems: "center",
    textAlign: "center",
    borderRadius: 180,
    width: 23,
    height: 23,
    top: -15,
    left: -10,
    backgroundColor: "#FF7F50",
  },
  itemsSearch: {
    alignItems: "center",
    textAlign: "center",
    borderRadius: 180,
    width: 23,
    height: 23,
    top: -15,
    left: -10,
    backgroundColor: "transparent",
  },
  textItemsCart: {
    fontSize: 11,
    color: "#ffffff",
    fontWeight: "bold",
    margin: 3,
  },
});

export default styles;
