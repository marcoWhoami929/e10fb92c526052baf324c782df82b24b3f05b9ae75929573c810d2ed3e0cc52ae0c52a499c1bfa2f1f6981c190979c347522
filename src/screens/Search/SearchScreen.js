import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Keyboard,
  ScrollView,
} from "react-native";
import styles from "./styles";
import stylesTemplate from "../templateStyles";
import HeaderIconsLeft from "../../components/MenusNavigation/HeaderIconsLeft";
import {
  getBrandName,
  getProductsByProductName,
  getProductsByBrandName,
  getProductsByCategoryName,
} from "../../data/MockDataAPI";
import { searches } from "../../data/dataArrays";
import { TextInput } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import ButtonShop from "../../components/ButtonShop/ButtonShop";
import ButtonWishList from "../../components/ButtonWishList/ButtonWishList";
/**CART CONTEXT */
import { CartContext } from "../../Context/CartContext.js";
/**CART CONTEXT */
export default function SearchScreen(props) {
  const { navigation } = props;

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [dataSearches, setDataSearches] = useState(searches);
  const { addItemToCart, addItemToFavorites } = useContext(CartContext);

  useLayoutEffect(() => {
    navigation.setOptions({
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
  }, [value]);

  useEffect(() => {}, [value]);

  const handleSearch = (text) => {
    setValue(text);
    var productArray1 = getProductsByProductName(text);
    var productArray2 = getProductsByBrandName(text);
    var productArray3 = getProductsByCategoryName(text);
    var aux = productArray1.concat(productArray2);
    var aux2 = aux.concat(productArray3);
    var productArray = [...new Set(aux2)];

    if (text == "") {
      setData([]);
    } else {
      setData(productArray);
    }
  };
  const saveSearch = () => {
    //Keyboard.dismiss;
    var keywordSearch = {
      id: dataSearches.length + 1,
      keyword: value,
    };

    searches.push(keywordSearch);
  };

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

  const renderSearches = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.containerSearche}>
        <TouchableOpacity
          onPress={() => {
            handleSearch(item.keyword);
          }}
        >
          <View style={styles.containerTextSearche}>
            <View style={{ width: "10%" }}>
              <Icon
                type="ionicon"
                name={
                  Platform.OS === "ios"
                    ? "ios-refresh-circle-outline"
                    : "md-refresh-circle-outline"
                }
                color="#cccccc"
              />
            </View>
            <View style={{ width: "80%" }}>
              <Text style={styles.keywordSearch}>{item.keyword}</Text>
            </View>
            <View style={{ width: "10%" }}>
              <Icon
                type="ionicon"
                name={
                  Platform.OS === "ios"
                    ? "ios-arrow-up-outline"
                    : "md-arrow-up-outline"
                }
                style={{ transform: [{ rotate: "320deg" }] }}
                color="#cccccc"
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.lineSeparator}></View>
    </TouchableOpacity>
  );

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
    <View>
      <View style={stylesTemplate.containerSearch}>
        <View style={styles.searchContainer}>
          <Icon
            type="ionicon"
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            color="#0036AE"
            onPress={props.onPress}
          />
          <TextInput
            style={styles.searchInputSecond}
            onChangeText={handleSearch}
            value={value}
            placeholder="Buscar nombre,marca o categoria"
            placeholderTextColor="#0039aa"
            onSubmitEditing={saveSearch}
          />
          <Pressable onPress={() => handleSearch("")}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-close" : "md-close"}
              color="#0036AE"
              onPress={props.onPress}
            />
          </Pressable>
        </View>
      </View>

      {data.length ? (
        <FlatList
          style={{ backgroundColor: "#ffffff", height: "100%" }}
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={data}
          renderItem={renderProducts}
          keyExtractor={(item) => `${item.productId}`}
        />
      ) : (
        <View
          style={{
            width: "100%",
            backgroundColor: "#0036AE",
            height: 600,
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 15,
            }}
          >
            Buscado Recientemente
          </Text>
          <ScrollView style={styles.containerMain}>
            <View>
              <FlatList
                style={styles.containerSearches}
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={dataSearches}
                renderItem={renderSearches}
                keyExtractor={(item) => `${item.id}`}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
