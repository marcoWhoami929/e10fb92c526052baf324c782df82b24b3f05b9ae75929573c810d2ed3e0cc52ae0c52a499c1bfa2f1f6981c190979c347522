import { StyleSheet, Dimensions } from "react-native";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 3;
const productNumColums = 2;
// item size
const PRODUCT_ITEM_HEIGHT = 100;
const PRODUCT_ITEM_MARGIN = 20;
const PRODUCT_ITEM_OFFSET = 10;
// 2 photos per width
export const ProductCardSm = StyleSheet.create({
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
    width: "70%",
    height: 70,
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
    alignItems: "center",
    marginLeft: "15%",
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF7F50",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  priceDiscount: {
    fontSize: 13,
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
  listProductsHorizontal: { top: -60, marginBottom: 10 },
  listProductsHorizontalProduct: { top: -10, marginBottom: 10 },
  listCategoriesHorizontal: { top: -70, marginLeft: 10 },
  listBrandsHorizontal: { top: -70, marginLeft: 10 },
  listBrandsHorizontalProducts: { top: 0, marginLeft: 10 },
  containerCategory: {
    alignItems: "center",
    margin: PRODUCT_ITEM_OFFSET,
    marginTop: 20,
    width:
      (SCREEN_WIDTH - PRODUCT_ITEM_MARGIN) / numColumns - PRODUCT_ITEM_OFFSET,
    height: PRODUCT_ITEM_HEIGHT,
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
  photoCategory: {
    width: "99%",
    height: 70,

    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  containerCategorySm: {
    alignItems: "center",
    margin: PRODUCT_ITEM_OFFSET,
    marginTop: 20,
    width:
      (SCREEN_WIDTH - PRODUCT_ITEM_MARGIN) / numColumns - PRODUCT_ITEM_OFFSET,
    height: 60,
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
  photoCategorySm: {
    width: "80%",
    height: 50,

    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  titleCategory: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    marginTop: 0,
  },
  /***STYLES COUNT PRODUCT */
  operatingBox: {
    marginLeft: -20,
    top: 5,
    width: "100%",
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
    width: 25,
    height: 25,
    justifyContent: "center",
    backgroundColor: "#0036AE",
  },
  plus: {
    width: 25,
    height: 25,
    justifyContent: "center",
    backgroundColor: "#0036AE",
  },
  inputValue: {
    flex: 1,
    backgroundColor: "#ffffff",
    color: "#FF7F50",
    textAlign: "center",
    padding: 0,
    fontSize: 20,
    fontWeight: "bold",
    top: 0,
  },
});
