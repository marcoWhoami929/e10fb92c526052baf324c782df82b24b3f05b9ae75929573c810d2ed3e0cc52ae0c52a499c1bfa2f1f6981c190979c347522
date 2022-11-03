import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerScroll: {
    backgroundColor: "#0036AE",
    width: "100%",
  },
  containerHeader: {
    width: "100%",
    height: 50,
    alignItems: "flex-start",
    backgroundColor: "#0036AE",
  },
  containerMain: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: "100%",
  },
  containerSubMain: {
    width: "100%",
    height: 500,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
  },
  textRegister: {
    fontSize: 13,
    color: "#ffffff",
    marginRight: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    color: "#ffffff",
    marginLeft: 15,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "#ffffff",
    margin: 15,
    fontWeight: "light",
    top: 10,
    textAlign: "justify",
  },
  input: {
    backgroundColor: "#EEF1F8",
    color: "black",
    width: "100%",
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10,
  },
  textTitle: {
    textAlign: "left",
    fontSize: 12,
    color: "#9B9B9B",
    fontWeight: "bold",
  },
  textSubTitle: {
    textAlign: "left",
    fontSize: 9,
    color: "#9B9B9B",
    fontWeight: "bold",
  },
  btnLogin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "90%",
    borderRadius: 20,
    borderColor: "#FF7F50",
    backgroundColor: "#FF7F50",
    borderWidth: 1,

    marginBottom: 10,
    marginLeft: "5%",

    // backgroundColor: '#2cd18a'
  },
  textBotonLogin: {
    fontWeight: "bold",
    color: "#ffffff",
    paddingLeft: 10,
  },
});
export default styles;
