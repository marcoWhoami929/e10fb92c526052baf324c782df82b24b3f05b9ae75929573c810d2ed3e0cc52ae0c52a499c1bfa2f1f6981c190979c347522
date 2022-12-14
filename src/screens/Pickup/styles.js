import { StyleSheet, Dimensions, StatusBar } from "react-native";

// screen sizing
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  containerScroll: {},
  containerItem: {
    width: "95%",
    height: 350,
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
    marginLeft: "2.5%",
    top: 10,
  },
  containerMain: {
    width: "100%",
    height: 250,
    backgroundColor: "rgba(225, 225, 225, 0.4)",
    top: -150,
  },
  containerItemMap: {
    width: "100%",
    height: 500,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
    height: height,
    top: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  containerBottoms: {
    width: 50,
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 180,
    top: -400,
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    top: 0,
    marginLeft: 10,
  },
  containerTitle: {
    flexDirection: "row",
    width: "100%",
    height: 30,
    top: 10,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    color: "#FF7F50",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 10,
    color: "#9C9C9C",
    top: 5,
  },
  input: {
    backgroundColor: "#EEF1F8",
    color: "black",
    width: "85%",
    height: 60,
    paddingLeft: 0,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  inputObservations: {
    backgroundColor: "#EEF1F8",
    color: "black",
    width: "90%",
    height: 100,
    marginLeft: "2.5%",
    paddingLeft: 10,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 10,
    top: 35,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF1F8",
    borderRadius: 10,

    top: 10,
    width: "90%",
    height: 60,
    marginLeft: "5%",
    justifyContent: "space-around",
  },
  containerButtonPickup: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "150%",
    height: 50,
    alignItems: "center",
    marginLeft: "7%",
    top: 90,
  },
  bottomModalView: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalSucursals: {
    width: "100%",
    height: "35%",
    borderRadius: 20,
    borderWidth: 0,
    borderStyle: "solid",
    backgroundColor: "#f2f2f2",
  },
  iconCloseModal: {
    margin: 10,
  },
  containerListSucursals: {
    width: "95%",
    height: 200,
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
    marginLeft: "2.5%",
  },
  picker: { top: -20 },
  /***SPINNER */
  spinnerTextStyle: {
    color: "#FFFFFF",
  },
});
export default styles;
