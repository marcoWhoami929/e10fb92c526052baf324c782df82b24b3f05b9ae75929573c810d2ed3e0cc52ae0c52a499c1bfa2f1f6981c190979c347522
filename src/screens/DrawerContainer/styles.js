import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100, // works on ios
    elevation: 100, // works on android
  },
  containerScroll: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    backgroundColor: "#0039aa",
    width: "100%",
    height: 150,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  nameUser: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
  editUser: {
    color: "#E5E5E5",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
    top: 10,
  },
  icon: { top: 3 },
  btnLoginOutline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "70%",
    borderRadius: 15,
    borderColor: "#FF7F50",
    backgroundColor: "#FF7F50",
    borderWidth: 1,

    // backgroundColor: '#2cd18a'
  },
  textBotonLoginOutline: {
    fontWeight: "bold",
    color: "#ffffff",
    paddingLeft: 10,
  },
});

export default styles;
