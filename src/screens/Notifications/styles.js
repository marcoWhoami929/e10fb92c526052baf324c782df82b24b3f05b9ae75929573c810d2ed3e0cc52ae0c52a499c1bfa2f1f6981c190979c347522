import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerScroll: {
    margin: 10,
  },
  containerItem: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 100,
    top: 2,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
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
  textTitle: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 15,
    top: 5,
    color: "#FF7F50",
  },
  textMessage: {
    fontWeight: "ligh",
    fontSize: 12,
    top: 5,
    color: "#333333",
    textAlign: "justify",
  },
  containerMain: {
    width: "92%",
    height: 60,
    marginLeft: "5%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    top: 10,
  },
});
export default styles;
