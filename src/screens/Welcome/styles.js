import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerScroll: {
    margin: 10,
  },
  containerItem: {
    flexDirection: "row",
    width: "100%",
    height: "70%",
    top: 0,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
  },
  containerImage: {
    backgroundColor: "#ffffff",
    marginLeft: "20%",
    flexDirection: "row",
    width: "55%",
    height: "65%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    top: -30,
  },
  image: {
    width: 130,
    height: 230,
    flexDirection: "row",
    top: -10,
  },
  containerItemWelcome: {
    width: "100%",
    height: 320,
    top: -110,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#0036AE",

    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    shadowColor: "#cccccc",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1.0,
    elevation: 0.5,
  },
  containerTitle: {
    marginLeft: 10,
    width: "90%",
    height: 50,
    top: 40,
  },
  containerContent: {
    marginLeft: 10,
    width: "90%",
    height: 80,
    top: 40,
  },
  texWelcome: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  textContent: {
    fontSize: 12,
    fontWeight: "light",
    color: "#ffffff",
    textAlign: "justify",
  },
  btnLogin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "97%",
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
    fontSize: 17,
  },
  btnRegister: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "97%",
    borderRadius: 20,
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    marginBottom: 10,
    marginLeft: "5%",

    // backgroundColor: '#2cd18a'
  },
  textBotonRegister: {
    fontWeight: "bold",
    color: "#FF7F50",
    fontSize: 17,
  },
});
export default styles;
