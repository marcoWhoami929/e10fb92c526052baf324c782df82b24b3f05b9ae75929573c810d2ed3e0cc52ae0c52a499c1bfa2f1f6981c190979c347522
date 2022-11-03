import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import { CartContext } from "../../Context/CartContext";
import { Icon } from "react-native-elements";
import ButtonShop from "../../components/ButtonShop/ButtonShop";
import ButtomStore from "../../components/ButtonShop/ButtonStore";
export default function Cart(props) {
  const { navigation } = props;
  const {
    itemsFavorites,
    getItemsFavoritesCount,
    getTotalFavoritesPrice,
    addItemToCart,
    deleteItemToFavorites,
  } = useContext(CartContext);
  useLayoutEffect(() => {
    navigation.setOptions({
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
  const onAddToCart = (id) => {
    const counter = 1;
    addItemToCart(id, counter);
  };
  const onDeleteToFavorites = (id) => {
    Alert.alert(
      "Eliminar!",
      "Comfirmas que deseas eliminar este producto de sus favoritos.",
      [
        { text: "Si", onPress: () => deleteItemToFavorites(id) },
        {
          text: "No",
          onPress: () => console.log("No button clicked"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  };
  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalFavoritesPrice());
    });
    return (
      <View style={styles.cartTotal}>
        <View style={styles.containerTotal}>
          <Text style={styles.titleTotal}>Total</Text>
        </View>
        <View style={styles.containerButtonCheckout}>
          <Text style={styles.totalAmount}>$ {total.toFixed(2)}</Text>
        </View>
      </View>
    );
  }

  function renderItem({ item }) {
    return (
      <View style={styles.cartLine}>
        <View style={styles.containerCart}>
          <Image
            style={styles.imageProductCart}
            source={{ uri: item.product.photo_url }}
          />
        </View>
        <View style={styles.containerCart}>
          <Text style={styles.titleProduct}>{item.product.title}</Text>

          <View style={styles.operatingBox}>
            <ButtonShop onPress={() => onAddToCart(item.product.productId)} />
          </View>
        </View>

        <View style={styles.containerCartPrices}>
          <Text style={styles.totalPriceProduct}>
            $ {item.totalPrice.toFixed(2)}
          </Text>
          {item.product.discount == 0 ? (
            <Text style={styles.totalProduct}></Text>
          ) : (
            <Text style={styles.totalProduct}>$ {item.total.toFixed(2)}</Text>
          )}
        </View>
        <View style={styles.containerCartTrash}>
          <TouchableOpacity style={styles.iconTrash}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-trash" : "md-trash"}
              color="#FF7F50"
              onPress={() => {
                onDeleteToFavorites(item.id);
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.containerScroll}>
      {itemsFavorites.length ? (
        <FlatList
          style={styles.itemsList}
          contentContainerStyle={styles.itemsListContainer}
          data={itemsFavorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.product.productId.toString()}
          ListFooterComponent={Totals}
        />
      ) : (
        <View style={styles.containerWithOutProducts}>
          <View style={styles.containerMainCart}>
            <Image
              style={styles.containerImageWithOutProducts}
              source={{
                uri:
                  "https://sanfranciscodekkerlab.com/dekkershop/carrito-1.png",
              }}
            />
          </View>
          <View style={styles.containerTextWithOutProducts}>
            <Text style={styles.textEmptyCart}>
              No tienes favoritos agregados.
            </Text>
            <Text style={styles.msgEmptyCart}>
              Agrega los productos que mas te gusten.
            </Text>
            <TouchableOpacity>
              <ButtomStore
                onPress={() => {
                  navigation.navigate("Products");
                }}
              ></ButtomStore>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
