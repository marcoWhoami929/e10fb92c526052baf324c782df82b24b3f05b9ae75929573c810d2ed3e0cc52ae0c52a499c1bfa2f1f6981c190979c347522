import React, { useLayoutEffect, useContext, useState } from "react";
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
import {
  getBrandName,
  getAllProducts,
  getProductsByFilter,
  getFilterDiscountProducts,
  getFilterBrandProducts,
} from "../../data/MockDataAPI";
import { brands, orderFiltersList } from "../../data/dataArrays";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import ButtonShop from "../../components/ButtonShop/ButtonShop";
import ButtonWishList from "../../components/ButtonWishList/ButtonWishList";
import { Icon } from "react-native-elements";
import RoundCheckbox from "react-native-round-checkbox";
import Modal from "react-native-modal";
/**CART CONTEXT */
import { CartContext } from "../../Context/CartContext.js";
/**CART CONTEXT */
export default function ProductsScreen(props) {
  const { navigation, route } = props;

  const productsArray = getAllProducts();
  const { addItemToCart, addItemToFavorites } = useContext(CartContext);
  const [productsFilter, setProductsFilter] = useState(productsArray);
  const [isModalVisibleOrder, setModalVisibleOrder] = useState(false);
  const [filterDiscount, setFilterDiscount] = useState(false);
  const [dataOrderFiltersList, setIsCheckedFiltersList] = useState(
    orderFiltersList
  );
  const [filterOrder, setFilterOrder] = useState("Ordenar");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Productos",
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
  const toggleModalOrder = () => {
    setModalVisibleOrder(!isModalVisibleOrder);
  };
  const onPressProduct = (item) => {
    navigation.navigate("Product", { item });
  };
  const onPressBrand = (item) => {
    const title = item.name;
    const brand = item;
    navigation.navigate("ProductsList", { brand, title });
  };
  const onAddToCart = (id) => {
    const counter = 1;
    addItemToCart(id, counter);
  };
  const onAddToFavorites = (id) => {
    addItemToFavorites(id);
  };
  const handleChangeOrder = (id, titleShort, filter) => {
    let temp = orderFiltersList.map((check) => {
      if (id === check.id) {
        return { ...check, isChecked: !check.isChecked };
      }
      return check;
    });

    setIsCheckedFiltersList(temp);
    setFilterOrder(titleShort);
    const productos = getProductsByFilter(filter);
    setProductsFilter(productos);
    setModalVisibleOrder(!isModalVisibleOrder);
  };

  const filterDiscountProducts = () => {
    if (!filterDiscount) {
      setFilterDiscount(!filterDiscount);
      const productos = getFilterDiscountProducts();
      setProductsFilter(productos);
    } else {
      setFilterDiscount(!filterDiscount);
      setProductsFilter(productsArray);
    }
  };

  const filterBrand = (id) => {
    const productos = getFilterBrandProducts(id);
    setProductsFilter(productos);
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
  const renderBrand = ({ item }) => (
    <TouchableOpacity onPress={() => filterBrand(item.id)}>
      <View style={styles.containerCategory}>
        <Image
          style={styles.photoCategory}
          source={{ uri: item.photo_url_main }}
        />
      </View>
    </TouchableOpacity>
  );

  const renderFilterOrder = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.containerFilterOrder}>
        <View style={styles.containerTextFilterOrder}>
          <Text style={styles.nameFilterOrder}>{item.title}</Text>
        </View>

        <View style={stylesTemplate.checkbox}>
          <RoundCheckbox
            size={22}
            borderColor={"#FF7F50"}
            backgroundColor={"#FF7F50"}
            iconColor={"#ffffff"}
            checked={item.isChecked}
            onValueChange={() => {
              handleChangeOrder(item.id, item.titleShort, item.filter);
            }}
          />
        </View>
      </View>
      <View style={styles.lineSeparator}></View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.containerScroll}>
      <View style={styles.containerImage}>
        <Image
          style={styles.photoBrand}
          source={{
            uri:
              "https://sanfranciscodekkerlab.com/dekkershop/banner-productos.png",
          }}
        />
      </View>

      <ScrollView style={styles.containerMain}>
        <Modal
          style={styles.bottomModalView}
          isVisible={isModalVisibleOrder}
          backdropOpacity={0}
          onBackdropPress={toggleModalOrder}
        >
          <View style={styles.modalFilterOrder}>
            <TouchableOpacity
              style={{ alignSelf: "flex-start" }}
              onPress={toggleModalOrder}
            >
              <Icon
                type="ionicon"
                name={Platform.OS === "ios" ? "ios-close" : "md-close"}
                color="#FF7F50"
                style={styles.iconCloseModal}
              />
            </TouchableOpacity>
            <Text style={styles.titleModalFilterOrder}>Ordenar</Text>
            <View>
              <FlatList
                style={styles.containerFiltersOrder}
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={dataOrderFiltersList}
                renderItem={renderFilterOrder}
                keyExtractor={(item) => `${item.id}`}
              />
            </View>
          </View>
        </Modal>

        <View style={styles.containerBrands}>
          <FlatList
            style={styles.listBrandsHorizontalProducts}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={brands}
            renderItem={renderBrand}
            keyExtractor={(item) => `${item.id}`}
          />
          <View style={stylesTemplate.containerFilters}>
            <TouchableOpacity
              style={styles.containerFilter1}
              onPress={toggleModalOrder}
            >
              <View>
                <Icon
                  type="ionicon"
                  name={
                    Platform.OS === "ios"
                      ? "ios-options-outline"
                      : "md-options-outline"
                  }
                  color="#333333"
                  size={28}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.containerFilter2}
              onPress={toggleModalOrder}
            >
              <View>
                <Text style={stylesTemplate.textFilter}>{filterOrder}</Text>
              </View>
              <View>
                <Icon
                  type="ionicon"
                  name={
                    Platform.OS === "ios"
                      ? "ios-chevron-down-outline"
                      : "md-chevron-down-outline"
                  }
                  color="#333333"
                  size={20}
                />
              </View>
            </TouchableOpacity>
            {filterDiscount ? (
              <TouchableOpacity
                style={styles.containerFilterActive3}
                onPress={filterDiscountProducts}
              >
                <View>
                  <Text style={stylesTemplate.textFilterActive}>
                    Con Descuento
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.containerFilter3}
                onPress={filterDiscountProducts}
              >
                <View>
                  <Text style={stylesTemplate.textFilter}>Con Descuento</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
          <FlatList
            style={styles.listProducts}
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={productsFilter}
            renderItem={renderProducts}
            keyExtractor={(item) => `${item.productId}`}
          />
        </View>
      </ScrollView>
    </View>
  );
}
