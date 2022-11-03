import React, { useLayoutEffect, useContext } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styles from "./styles";
import stylesTemplate from "../templateStyles";
import { getProducts, getBrandName, getBrandUrl } from "../../data/MockDataAPI";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import ButtonShop from "../../components/ButtonShop/ButtonShop";
import ButtonWishList from "../../components/ButtonWishList/ButtonWishList";
/**CART CONTEXT */
import { CartContext } from "../../Context/CartContext.js";
/**CART CONTEXT */
export default function ProductsListScreen(props) {
  const { navigation, route } = props;

  const item = route?.params?.brand;
  const productsArray = getProducts(item.id);
  const brandUrl = getBrandUrl(item.id);
  const { addItemToCart, addItemToFavorites } = useContext(CartContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: { fontSize: 18, color: "#ffffff" },
      headerLeft: () => (
        <View>
          <BackButtonGeneral
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      ),
      headerRight: () => (
        <HeaderIconsRight
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
    });
  }, []);

  const onPressProduct = (item) => {
    navigation.navigate("Product", { item });
  };
  const onAddToCart = (id) => {
    const counter = 1;
    addItemToCart(id, counter);
  };
  const onAddToFavorites = (id) => {
    addItemToFavorites(id);
  };

  const renderProducts = ({ item }) => (
    <TouchableOpacity onPress={() => onPressProduct(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <View style={styles.containerBrand}>
          <Text style={styles.containerBrandName}>
            {getBrandName(item.brandId)}
          </Text>
          <View style={styles.containerDiscount}>
            {item.discount == 0 ? (
              <Text style={styles.percentDiscount}></Text>
            ) : (
              <Text style={styles.percentDiscount}>{item.discount} %</Text>
            )}
          </View>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>
          ${item.priceDiscount.toFixed(2)}
          {item.discount == 0 ? (
            <Text style={styles.priceDiscount}></Text>
          ) : (
            <Text style={styles.priceDiscount}>${item.price.toFixed(2)}</Text>
          )}
        </Text>
        <View style={styles.containerShop}>
          <View style={styles.containerShopCartItem}>
            <ButtonShop onPress={() => onAddToCart(item.productId)} />
          </View>
          <View style={styles.containerShopFavoriteItem}>
            <ButtonWishList onPress={() => onAddToFavorites(item.productId)} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.containerScroll}>
      <View style={styles.containerImage}>
        <Image style={styles.photoBrand} source={{ uri: "" + brandUrl }} />
      </View>
      <ScrollView style={styles.containerMain}>
        <View style={styles.containerBrands}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={productsArray}
            renderItem={renderProducts}
            keyExtractor={(item) => `${item.productId}`}
          />
        </View>
      </ScrollView>
    </View>
  );
}
