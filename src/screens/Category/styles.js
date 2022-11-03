import { StyleSheet } from "react-native";
import { ProductCard } from "../../AppStyles";

const styles = StyleSheet.create({
  container: ProductCard.container,
  photo: ProductCard.photo,
  title: ProductCard.title,
  price: ProductCard.price,
  priceDiscount: ProductCard.priceDiscount,
  listProductsVertical: ProductCard.listProductsVertical,
  containerBrand: ProductCard.containerBrand,
  containerShop: ProductCard.containerShop,
  containerShopCartItem: ProductCard.containerShopCartItem,
  containerShopFavoriteItem: ProductCard.containerShopFavoriteItem,
  containerBrandName: ProductCard.containerBrandName,
  containerDiscount: ProductCard.containerDiscount,
  percentDiscount: ProductCard.percentDiscount,
  containerScroll: {
    backgroundColor: "#0036AE",
    width: "100%",
  },
  containerMain: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: "100%",
    top: -20,
  },
  titleIngredient: {
    fontWeight: "bold",
    fontSize: 20,
  },
  photoCategory: {
    width: "100%",
    height: "100%",
  },
  containerImage: {
    width: "100%",
    alignItems: "flex-start",
    height: 120,
  },
  infoCategory: {
    color: "black",
    margin: 10,
    fontSize: 19,
    textAlign: "left",
    fontWeight: "bold",
  },
  containerCategories: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    top: 0,
    height: "100%",
  },
});

export default styles;
