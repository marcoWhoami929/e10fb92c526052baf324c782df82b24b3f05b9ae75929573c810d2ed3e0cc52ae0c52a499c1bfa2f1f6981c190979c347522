import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: "100%",
    borderRadius: 100,
    borderColor: "#0036AE",
    backgroundColor: "#0036AE",
    borderWidth: 1,
    top: 0,
    marginBottom: 10,

    // backgroundColor: '#2cd18a'
  },
  text: {
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "bold",
  },
  containerDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "100%",
    borderRadius: 100,
    borderColor: "#0036AE",
    backgroundColor: "#0036AE",
    borderWidth: 1,
    top: 5,
    marginBottom: 10,

    // backgroundColor: '#2cd18a'
  },
  containerCheckout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    borderRadius: 20,
    borderColor: "#FF7F50",
    backgroundColor: "#FF7F50",
    borderWidth: 1,
    top: 0,
    marginBottom: 10,

    // backgroundColor: '#2cd18a'
  },
});

export default styles;
