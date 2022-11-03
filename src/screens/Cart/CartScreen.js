import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import styles from "./styles";
import { CartContext } from "../../Context/CartContext";
import { Icon } from "react-native-elements";
import ButtonCheckout from "../../components/ButtonShop/ButtonCheckout";
import ButtomStore from "../../components/ButtonShop/ButtonStore";
export default function Cart(props) {
  const { navigation } = props;
  const {
    items,
    getItemsCount,
    getTotalPrice,
    getTotal,

    deleteItemToCart,
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
    });
  }, []);
  const onDeleteToCart = (id) => {
    Alert.alert(
      "Eliminar!",
      "Comfirmas que deseas eliminar este producto del carrito",
      [
        { text: "Si", onPress: () => deleteItemToCart(id) },
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
    let [subtotal, setSubtotal] = useState(0);
    let [descuento, setDescuento] = useState(0);
    let [items, setTotalItems] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
      setSubtotal(getTotal());
      setDescuento(getTotal() - getTotalPrice());
      setTotalItems(getItemsCount());
    });
    return (
      <View>
        <View style={styles.containerTotalLine}>
          <View style={{ width: "70%" }}>
            <Text style={styles.subtitle}>N° de Artículos</Text>
          </View>
          <View style={{ width: "30%" }}>
            <Text style={styles.amount}>{items}</Text>
          </View>
        </View>
        <View style={styles.containerTotal}>
          <View style={{ width: "70%" }}>
            <Text style={styles.subtitle}>Subtotal</Text>
          </View>
          <View style={{ width: "30%", justifyContent: "flex-end" }}>
            <Text style={styles.amount}>$ {subtotal.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.containerTotal}>
          <View style={{ width: "70%" }}>
            <Text style={styles.subtitle}>%Descuentos</Text>
          </View>
          <View style={{ width: "30%", justifyContent: "flex-end" }}>
            <Text style={styles.amount}> - $ {descuento.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.containerTotal}>
          <View style={{ width: "70%" }}>
            <Text style={styles.titleTotal}>Total a pagar</Text>
          </View>
          <View style={{ width: "40%", justifyContent: "flex-end" }}>
            <Text style={styles.totalAmount}>$ {total.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.containerBottomShopping}>
          <View style={{ width: "100%" }}>
            <TouchableOpacity>
              <ButtonCheckout
                onPress={() => {
                  navigation.navigate("Checkout");
                }}
              ></ButtonCheckout>
            </TouchableOpacity>
          </View>
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
            <TouchableOpacity activeOpacity={0.2} style={styles.reduce}>
              <Text allowFontScaling={false} style={styles.btn1}>
                -
              </Text>
            </TouchableOpacity>

            <View style={styles.inputBox}>
              <Text style={styles.inputValue}>{item.qty}</Text>
            </View>

            <TouchableOpacity activeOpacity={0.2} style={styles.plus}>
              <Text allowFontScaling={false} style={styles.btn1}>
                +
              </Text>
            </TouchableOpacity>
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
                onDeleteToCart(item.id);
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.containerScroll}>
      {items.length ? (
        <FlatList
          style={styles.itemsList}
          contentContainerStyle={styles.itemsListContainer}
          data={items}
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
            <Text style={styles.textEmptyCart}>Tu carrito está vacío</Text>
            <Text style={styles.msgEmptyCart}>
              LLénalo con tus productos favoritos,rebajas y promociones que
              tenemos para tí.
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
