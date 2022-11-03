import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerScroll: {
    backgroundColor: "#0036AE",
    width: "100%",
  },
  containerItem: {
    width: "95%",
    height: 700,
    margin: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    shadowColor: "#cccccc",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1.0,
    elevation: 0.5,
  },
  containerMain: {
    backgroundColor: "#F5F4F4",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: "100%",
  },
  container: {
    flexDirection: "row",
    width: "98%",
    height: 80,
    top: 5,
    backgroundColor: "#EEF1F8",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  icon: { top: 2, marginLeft: 10 },
  iconSecond: {
    top: 3,
  },
  textChangePhoto: {
    fontSize: 15,
    fontWeight: "light",
    color: "#FF7F50",
  },
  textTitle: {
    fontSize: 12,
    fontWeight: "ligt",
    color: "#8A8A8A",
    marginLeft: 5,
    top: 5,
  },
  textSubtitles: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF7F50",

    top: 5,
  },
  input: {
    borderBottomColor: "#EEF1F8",
    borderBottomWidth: 2,
    color: "#7C7C7C",
    width: "100%",
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  containerDetailMap: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "96%",
    height: 120,
    top: 25,
    alignItems: "center",
    backgroundColor: "#cccccc",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    left: 1,
  },
  map: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  btnUpdate: {
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
  textBotonUpdate: {
    fontWeight: "bold",
    color: "#ffffff",
    paddingLeft: 10,
  },
  bottomModalView: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalDirection: {
    width: "100%",
    height: "70%",
    borderRadius: 20,
    borderWidth: 0,
    borderStyle: "solid",
    backgroundColor: "#f2f2f2",
  },
  iconCloseModal: {
    margin: 10,
  },
  titleModalDirection: {
    textAlign: "center",
    top: -30,
    fontSize: 18,
    color: "#333333",
    fontWeight: "bold",
  },
  containerDirections: {
    width: "93%",
    backgroundColor: "#ffffff",
    height: "85%",
    top: 5,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 1.0,
    elevation: 3,
    marginBottom: 10,
    marginLeft: 10,
  },
  containerDirectionSecond: {
    marginBottom: 10,
    marginLeft: 15,
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
    width: "90%",
    height: 50,
  },
  nameDirection: {
    fontSize: "16",
    fontWeight: "bold",
    color: "#FF7F50",
  },
  containerTextDirection: {
    width: "90%",
  },
  lineSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    width: "90%",
    left: 15,
  },
  modal: {
    width: "100%",
    height: "90%",
    borderWidth: 0,
    borderStyle: "solid",
    backgroundColor: "#cccccc",
    marginBottom: -50,
  },
  containerMap: {
    width: "100%",
    height: "100%",
    backgroundColor: "#cccccc",
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    top: -45,
  },
  mapNew: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  bottomMap: {
    flex: 1,
    alignItems: "center",
    borderRadius: 180,
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    top: -250,
  },
  containerInfoDirection: {
    width: "93%",
    backgroundColor: "#ffffff",
    height: "100%",
    borderRadius: 10,
    marginLeft: 10,
    top: -150,
  },
  titleMain: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    color: "#FF7F50",
  },
  textDirectionMain: {
    fontSize: 15,
    fontWeight: "light",
    marginLeft: 10,
    marginTop: 5,
    color: "#333333",
  },
  containerInfoReception: {
    flexDirection: "row",
    width: "100%",
    height: 50,
  },
  containerInfoReceptionSecond: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  containerInfoReceptionThird: {
    flexDirection: "flex-start",
    width: "93%",
    marginTop: 15,
    marginLeft: 10,
    justifyContent: "center",
  },
  inputGeneral: {
    backgroundColor: "#EEF1F8",
    color: "black",
    width: "45%",
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  inputNumber: {
    backgroundColor: "#EEF1F8",
    color: "black",
    width: "93%",
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  spinnerTextStyle: {
    color: "#FFFFFF",
  },
});
export default styles;
