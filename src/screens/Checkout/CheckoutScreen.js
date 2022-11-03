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
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import styles from "./styles";
import stylesTemplate from "../templateStyles";
import { CartContext } from "../../Context/CartContext";
import { Icon } from "react-native-elements";
import ButtonToPay from "../../components/ButtonShop/ButtonToPay";
import ButtonUpdate from "../../components/ButtonShop/ButtonUpdateDirection";
import Modal from "react-native-modal";
import MapView, { Marker } from "react-native-maps";
import { directions, cards } from "../../data/dataArrays";
import RoundCheckbox from "react-native-round-checkbox";
import Spinner from "react-native-loading-spinner-overlay";
export default function Checkout(props) {
  const { navigation } = props;
  const {
    items,
    getItemsCount,
    getTotalPrice,
    getTotal,
    deleteItemToCart,
    clearCart,
  } = useContext(CartContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleDirection, setModalVisibleDirection] = useState(true);
  const [isModalVisibleCard, setModalVisibleCard] = useState(false);
  const [direction, setDirection] = useState(
    "Calle Libertad 5973, San Baltazar Linda Vista, 72550 Puebla, Pue."
  );
  const [phone, setPhone] = useState("2214229899");
  const [nameDirection, setNameDirection] = useState("Ubicacion Actual");
  const [shortDirection, setShortDirection] = useState(
    "Calle Libertad 5973..."
  );
  const [nameReception, setNameReception] = useState("");
  const [surNameReception, setSurnameReception] = useState("");
  const [phoneReception, setPhoneReception] = useState("");
  const [numberCard, setnumberCard] = useState("1179");
  const [urlCard, setUrlCard] = useState(
    "https://sanfranciscodekkerlab.com/dekkershop/mastercard-card.png"
  );

  const [isCheckedCash, setIsCheckedCash] = useState(false);

  const [dataDirections, setIsChecked] = useState(directions);
  const [dataCards, setIsCheckedCards] = useState(cards);
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      clearCart();
      navigation.navigate("Shopping");
    }, 3000);
  };

  const handleChange = (id, newDirection, newDirectionShort) => {
    let temp = directions.map((check) => {
      if (id === check.id) {
        return { ...check, isChecked: !check.isChecked };
      }
      return check;
    });

    setIsChecked(temp);
    changeDirection(newDirection, newDirectionShort);
  };

  const handleChangeCard = (id, numberShort, url) => {
    let temp = cards.map((check) => {
      if (id === check.id) {
        return { ...check, isChecked: !check.isChecked };
      }
      return check;
    });

    setIsCheckedCards(temp);
    changeCardNumber(numberShort, url);

    setIsCheckedCash(false);
  };
  const handleChangeMethod = () => {
    setIsCheckedCash(!isCheckedCash);
    toggleModalCard();
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setModalVisibleDirection(!isModalVisibleDirection);
  };
  const toggleModalDirection = () => {
    setModalVisibleDirection(!isModalVisibleDirection);
  };
  const toggleModalCard = () => {
    setModalVisibleCard(!isModalVisibleCard);
  };
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
  }, [nameReception, surNameReception, phoneReception]);

  useEffect(() => {}, [nameReception, surNameReception, phoneReception]);

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

  const changeDirection = (newDirection, newDirectionShort) => {
    setModalVisibleDirection(!isModalVisibleDirection);
    setDirection(newDirection);
    setShortDirection(newDirectionShort);
  };
  const changeCardNumber = (newNumber, urlCard) => {
    setModalVisibleCard(!isModalVisibleCard);
    setnumberCard(newNumber);

    setUrlCard(urlCard);
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
            <Text style={styles.subtitle}>%Descuento</Text>
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
              <ButtonToPay onPress={startLoading}></ButtonToPay>
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

  const renderDirection = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.containerDirectionSecond}>
        <View style={styles.containerTextDirection}>
          <Text style={styles.nameDirection}>{item.name}</Text>
          <Text style={styles.titleDirection}>{item.direction}</Text>
        </View>

        <View style={stylesTemplate.checkbox}>
          <RoundCheckbox
            size={22}
            borderColor={"#FF7F50"}
            backgroundColor={"#FF7F50"}
            iconColor={"#ffffff"}
            checked={item.isChecked}
            onValueChange={() => {
              handleChange(item.id, item.direction, item.nameShort);
            }}
          />
        </View>
      </View>
      <View style={styles.lineSeparator}></View>
    </TouchableOpacity>
  );
  const renderCard = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.containerCard}>
        <View style={styles.containerDirectionSecond}>
          <View
            style={{
              flexDirection: "row",
              width: "30%",
              alignItems: "flex-start",
            }}
          >
            <Image
              style={styles.imageMethodPayModal}
              source={{
                uri: item.url,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", width: "50%" }}>
            <Text style={styles.numberCard}>{item.number}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "20%",
              top: 15,
              marginLeft: 15,
            }}
          >
            <RoundCheckbox
              size={22}
              borderColor={"#FF7F50"}
              backgroundColor={"#FF7F50"}
              iconColor={"#ffffff"}
              checked={item.isChecked}
              onValueChange={() => {
                handleChangeCard(item.id, item.numberShort, item.url);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.lineSeparator}></View>
    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.containerScroll}>
      <Spinner
        visible={loading}
        textContent={"Generando Pedido..."}
        textStyle={styles.spinnerTextStyle}
      />
      <Modal
        style={styles.bottomModalView}
        isVisible={isModalVisible}
        backdropOpacity={0}
        onBackdropPress={toggleModal}
      >
        <View style={styles.modal}>
          <ScrollView style={styles.containerMap}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 19.011678573633223,
                longitude: -98.20579149971392,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              mapType="standard"
              showsUserLocation={true}
            >
              {directions.map((marker) => (
                <Marker
                  key={marker.id}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                ></Marker>
              ))}
            </MapView>
            <TouchableOpacity onPress={toggleModal}>
              <View style={styles.bottomMap}>
                <Icon
                  type="ionicon"
                  name={Platform.OS === "ios" ? "ios-close" : "md-close"}
                  color="#FF7F50"
                  style={styles.iconCloseModal}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.containerInfoDirection}>
              <Text style={styles.titleMain}>{nameDirection}</Text>

              <Text style={styles.textDirectionMain}>{direction}</Text>
              <Text style={styles.titleMain}>Recibe</Text>
              <View style={styles.containerInfoReception}>
                <TextInput
                  style={styles.input}
                  onChangeText={setNameReception}
                  value={nameReception}
                  placeholder="Nombre"
                  placeholderTextColor="#cccccc"
                />

                <TextInput
                  style={styles.input}
                  onChangeText={setSurnameReception}
                  value={surNameReception}
                  placeholder="Apellidos"
                  placeholderTextColor="#cccccc"
                />
              </View>
              <View style={styles.containerInfoReceptionSecond}>
                <TextInput
                  style={styles.inputNumber}
                  onChangeText={setPhoneReception}
                  value={phoneReception}
                  placeholder="Teléfono"
                  placeholderTextColor="#cccccc"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.containerInfoReceptionThird}>
                <ButtonUpdate></ButtonUpdate>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <Modal
        style={styles.bottomModalView}
        isVisible={isModalVisibleDirection}
        backdropOpacity={0}
        onBackdropPress={toggleModalDirection}
      >
        <View style={styles.modalDirection}>
          <TouchableOpacity
            style={{ alignSelf: "flex-start" }}
            onPress={toggleModalDirection}
          >
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-close" : "md-close"}
              color="#FF7F50"
              style={styles.iconCloseModal}
            />
          </TouchableOpacity>
          <Text style={styles.titleModalDirection}>
            Selecciona una direccion
          </Text>
          <View>
            <FlatList
              style={styles.containerDirections}
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={dataDirections}
              renderItem={renderDirection}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
        </View>
      </Modal>
      <Modal
        style={styles.bottomModalView}
        isVisible={isModalVisibleCard}
        backdropOpacity={0}
        onBackdropPress={toggleModalCard}
      >
        <View style={styles.modalMethods}>
          <TouchableOpacity
            style={{ alignSelf: "flex-start" }}
            onPress={toggleModalCard}
          >
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-close" : "md-close"}
              color="#FF7F50"
              style={styles.iconCloseModal}
            />
          </TouchableOpacity>
          <Text style={styles.titleModalDirection}>
            Selecciona el método de pago
          </Text>
          <View>
            <FlatList
              style={styles.containerCards}
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={dataCards}
              renderItem={renderCard}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              toggleModalCard();
              navigation.navigate("Card");
            }}
          >
            <View style={styles.containerNewCard}>
              <View
                style={{
                  width: "20%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type="ionicon"
                  name={
                    Platform.OS === "ios" ? "ios-add-outline" : "md-add-outline"
                  }
                  color="#FF7F50"
                  style={styles.iconNewCard}
                  size={22}
                />
              </View>
              <View
                style={{
                  width: "80%",
                  flexDirection: "column",
                }}
              >
                <Text style={styles.titleNewCard}>
                  Agregar una tarjeta de crédito/débito
                </Text>
                <Text style={styles.subtitleNewCard}>VISA/MasterCard/Amex</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.containerNewCard}>
            <View
              style={{
                width: "20%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                type="ionicon"
                name={
                  Platform.OS === "ios" ? "ios-cash-outline" : "md-cash-outline"
                }
                color="#FF7F50"
                style={styles.iconNewCard}
                size={22}
              />
            </View>
            <View
              style={{
                width: "60%",
                flexDirection: "column",
              }}
            >
              <Text style={styles.titleNewCard}>Efectivo</Text>
              <Text style={styles.subtitleNewCard}>
                El monto máximo para pedidos con pago en la entrega puede ser
                hasta MX $1000.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "20%",
                top: 5,
                marginLeft: 20,
              }}
            >
              <RoundCheckbox
                size={22}
                borderColor={"#FF7F50"}
                backgroundColor={"#FF7F50"}
                iconColor={"#ffffff"}
                checked={isCheckedCash}
                onValueChange={() => {
                  handleChangeMethod();
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.containerItemsCheckout}>
          <View>
            <Text style={styles.textTitle}>Entregar en:</Text>
            <View style={styles.containerDirection}>
              <View style={{ width: "70%", flexDirection: "row" }}>
                <Text style={styles.textDirection}>{direction}</Text>
                <Icon
                  type="ionicon"
                  name={
                    Platform.OS === "ios"
                      ? "ios-chevron-forward"
                      : "md-chevron-forward"
                  }
                  color="#FF7F50"
                  style={styles.iconDirectionMain}
                  size={22}
                />
              </View>

              <View style={{ width: "30%", flexDirection: "row" }}>
                <TouchableOpacity onPress={toggleModalDirection}>
                  <Icon
                    type="ionicon"
                    name={
                      Platform.OS === "ios"
                        ? "ios-create-outline"
                        : "md-create-outline"
                    }
                    color="#FF7F50"
                    size={25}
                    style={{ marginLeft: 35, top: 0 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.textNumberPhone}>{phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.containerItemsCheckoutMethod}>
        <View style={styles.containerDirectionSecond}>
          <View style={{ width: "50%" }}>
            <Text style={styles.textTitleMethod}>Método de Pago:</Text>
          </View>
          <TouchableOpacity onPress={toggleModalCard}>
            <View style={{ width: "50%", flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                {isCheckedCash === false ? (
                  <Image
                    style={styles.imageMethodPay}
                    source={{
                      uri: urlCard,
                    }}
                  />
                ) : (
                  <Image
                    style={styles.imageMethodPayCash}
                    source={{
                      uri:
                        "https://sanfranciscodekkerlab.com/dekkershop/cash.png",
                    }}
                  />
                )}
              </View>
              {isCheckedCash === false ? (
                <Text style={styles.textTitleMethodPay}>{numberCard}</Text>
              ) : (
                <Text style={styles.textTitleMethodPay}>Efectivo</Text>
              )}

              <Icon
                type="ionicon"
                name={
                  Platform.OS === "ios"
                    ? "ios-chevron-forward"
                    : "md-chevron-forward"
                }
                color="#FF7F50"
                style={styles.iconMethod}
                size={22}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.productId.toString()}
        ListFooterComponent={Totals}
      />
    </ScrollView>
  );
}
