import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerSearch: {
    backgroundColor: "#0036AE",
    width: "100%",
    height: 60,
  },
  containerMainTitles: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 60,
    top: -55,
    marginBottom: -20,
  },

  containerMainProducts: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 60,

    marginBottom: -20,
  },
  containerMainTitlesproduct: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 60,
    marginBottom: -20,
  },
  containerTitles: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textTitles: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FF7F50",
    top: 3,
    marginLeft: 18,
  },
  iconTitles: {
    top: 3,
  },
  containerScroll: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  checkbox: { top: 0 },
  containerFilters: {
    width: "90%",
    height: 50,
    flexDirection: "row",
    marginLeft: "5%",
  },
  textFilter: {
    fontWeight: "bold",
    color: "#333333",
  },
  textFilterActive: {
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default styles;
