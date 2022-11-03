import { StyleSheet, Dimensions } from "react-native";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const productNumColums = 2;
// item size
const PRODUCT_ITEM_HEIGHT = 150;
const PRODUCT_ITEM_MARGIN = 20;

// 2 photos per width
export const ProductCard = StyleSheet.create({
  container: {
    marginLeft: PRODUCT_ITEM_MARGIN,
    marginTop: 20,
    marginBottom: 2,
    width:
      (SCREEN_WIDTH - (productNumColums + 1) * PRODUCT_ITEM_MARGIN) /
      productNumColums,
    height: PRODUCT_ITEM_HEIGHT + 100,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#cccccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 1.0,
    elevation: 0.5,
  },
  photo: {
    width: "99%",
    height: 110,
    marginTop: 5,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: "#cccccc",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1.0,
    elevation: 0.5,
  },
  title: {
    flex: 2,
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    marginLeft: 5,
  },
  price: {
    flex: 2,
    fontSize: 17,
    fontWeight: "bold",
    color: "#FF7F50",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  priceDiscount: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#cccccc",
    marginTop: 3,

    marginLeft: 15,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  containerBrand: {
    flexDirection: "row",
    width: "100%",
    height: 20,
    paddingBottom: 5,
  },
  containerBrandName: {
    width: "60%",
    height: 20,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF7F50",
    backgroundColor: "#ffffff",
    paddingBottom: 5,
    flexDirection: "row",
    textAlign: "left",
    paddingLeft: 5,
  },
  containerDiscount: {
    width: "40%",
    height: 30,
    backgroundColor: "#FF7F50",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    top: -10,
    flexDirection: "row",
  },
  percentDiscount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginLeft: 5,
    marginTop: 2,
  },
  containerShop: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerShopCartItem: {
    width: "70%",
    marginLeft: 5,
  },
  containerShopFavoriteItem: {
    width: "30%",
    margin: 5,
    top: 5,
  },
  listProductsVertical: { top: -60, marginBottom: 10 },
  /***STYLES COUNT PRODUCT */
  operatingBox: {
    margin: 5,
    top: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row", // Diseño del husillo
    alignItems: "center", // Alineación del eje lateral
    overflow: "hidden", // Ocultar más allá del alcance del control
  },
  btn1: {
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "transparent", // color transparente
    color: "#ffffff",
  },
  inputBox: {
    flex: 1, //
  },
  reduce: {
    width: 34,
    height: 34,
    justifyContent: "center",
    backgroundColor: "#0036AE",
  },
  plus: {
    width: 34,
    height: 34,
    justifyContent: "center",
    backgroundColor: "#0036AE",
  },
  inputValue: {
    flex: 1,
    backgroundColor: "#ffffff", // transparente
    color: "#FF7F50",
    textAlign: "center",
    padding: 0,
    fontSize: 20,
    fontWeight: "bold",
    top: 5,
  },
});
