import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  brandsItemContainer: {
    flex: 1,
    flexDirection: "row",
    width: "93%",
    height: 120,
    top: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#cccccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 1.0,
    elevation: 3,
    marginBottom: 20,
    marginLeft: 10,
  },
  brandsPhoto: {
    width: "100%",
    height: 155,
  },
  brandsName: {
    fontSize: 14,

    fontWeight: "bold",
    color: "#0036AE",
    marginTop: 10,
    textAlign: "left",
    marginRight: 10,
  },
  brandsOptions: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  brandOffert: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    width: 150,
    height: 25,
    borderRadius: 10,
    backgroundColor: "#FFBE96",
  },
  textOffert: {
    color: "#FF6506",
    fontSize: 12,
    fontWeight: "light",
  },
  brandsInfo: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0036AE",
    marginTop: 12,
    marginRight: 10,
  },
  icons: {
    marginTop: 8,
    marginRight: 10,
  },
  brandImageContainer: {
    flexDirection: "row",
    top: 25,
    width: "30%",
    height: 65,
    borderRadius: 20,

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.8,
    elevation: 0.5,
    marginBottom: 10,
    marginLeft: 10,
  },
  brandInfoContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 200,
    marginLeft: 10,
  },
});

export default styles;
