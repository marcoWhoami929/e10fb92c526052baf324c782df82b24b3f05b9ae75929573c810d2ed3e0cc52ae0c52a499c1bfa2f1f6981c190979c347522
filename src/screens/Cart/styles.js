import { StyleSheet } from "react-native";
import { ProductCardSm } from "../../AppStylesSm";
const styles = StyleSheet.create({
  operatingBox: ProductCardSm.operatingBox,
  reduce: ProductCardSm.reduce,
  btn1: ProductCardSm.btn1,
  inputBox: ProductCardSm.inputBox,
  inputValue: ProductCardSm.inputValue,
  plus: ProductCardSm.plus,
  cartLine: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 80,
    top: 2,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  itemsList: {
    backgroundColor: "#ffffff",
  },
  itemsListContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  containerScroll: {
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  imageProductCart: {
    flexDirection: "row",
    width: "50%",
    height: 30,
    top: 10,
    marginBottom: 10,
    marginLeft: 0,
  },
  titleProduct: {
    flexDirection: "row",
    marginLeft: -30,
    top: 0,
    fontSize: 10,
    fontWeight: "bold",
  },

  totalPriceProduct: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    top: 22,
    color: "#FF7F50",
    textAlign: "right",
  },
  totalProduct: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "#cccccc",
    top: 5,
    textAlign: "right",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  priceProduct: {
    flex: 1,
    fontSize: 10,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "right",
    top: 5,
  },

  quantityProduct: {
    flex: 1,
    fontSize: 11,
    fontWeight: "bold",
    color: "#FF7F50",
    textAlign: "center",
    top: 15,
  },
  containerCart: {
    width: "30%",
    height: 50,
    top: 5,
  },
  containerCartPrices: {
    width: "30%",
    height: 80,
  },
  containerTotalLine: {
    width: "100%",
    flexDirection: "row",
    height: 50,
    borderTopWidth: 1,
    top: 25,
    marginBottom: 5,
    borderTopColor: "#dddddd",
  },
  containerTotal: {
    width: "100%",
    flexDirection: "row",
    height: 35,
    borderTopColor: "#dddddd",
  },
  containerBottomShopping: {
    width: "100%",
    flexDirection: "row",
    height: 60,
    top: 10,
    borderTopColor: "#dddddd",
  },
  containerCartTrash: {
    width: "10%",
    height: 50,
  },
  iconTrash: {
    top: 10,
  },
  titleTotal: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 40,
    color: "#333333",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 40,
    color: "#333333",
  },
  amount: {
    flex: 1,
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#FF7F50",
    textAlign: "right",
    top: -5,
  },
  totalAmount: {
    flex: 1,
    fontSize: 19,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#FF7F50",
    textAlign: "left",
    top: -5,
  },
  containerWithOutProducts: {
    flex: 1,
    width: "100%",
    height: 700,
    flexDirection: "row-start",
    backgroundColor: "#ffffff",
  },
  containerMainCart: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  containerImageWithOutProducts: {
    flexDirection: "row",
    width: "70%",
    height: "70%",
    marginTop: -70,
  },
  containerTextWithOutProducts: {
    width: "90%",
    height: "20%",
    marginTop: -90,
    justifyContent: "center",
    marginLeft: 10,
    alignItems: "center",
  },
  textEmptyCart: {
    color: "#FF7F50",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  msgEmptyCart: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "light",
    textAlign: "center",
    margin: 13,
  },
});
export default styles;
