import React, { useLayoutEffect, useState } from "react";
import {
  FlatList,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import styles from "./stylesDetail";
import stylesTemplate from "../templateStyles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import { Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { directions, trackingsOrders } from "../../data/dataArrays";
import { getDetailOrder } from "../../data/MockDataAPI";
import Modal from "react-native-modal";
import RoundCheckbox from "react-native-round-checkbox";

export default function OrderDetailScreen(props) {
  const { navigation, route } = props;
  const [isModalVisibleTracking, setModalVisibleTracking] = useState(true);
  const item = route?.params?.id;
  const detail = getDetailOrder(item);

  const toggleModalTracking = () => {
    setModalVisibleTracking(!isModalVisibleTracking);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Detalle",
      headerTitleStyle: { fontSize: 18, color: "#ffffff" },
      headerLeft: () => (
        <View>
          <BackButtonGeneral
            onPress={() => {
              navigation.navigate("Orders");
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
  const renderBuy = ({ item }) => (
    <View style={styles.containerProduct}>
      <View style={{ width: "60%" }}>
        <Text style={styles.titleProduct}>{item.product}</Text>
      </View>
      <View style={{ width: "10%" }}>
        <Text style={styles.titleQuantity}>X {item.quantity}</Text>
      </View>
      <View style={{ width: "30%" }}>
        <Text style={styles.textTotalProduct}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );

  const renderTracking = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.containerTrackingSecond}>
        <View style={stylesTemplate.checkbox}>
          <RoundCheckbox
            size={22}
            borderColor={"#FF7F50"}
            backgroundColor={"#FF7F50"}
            iconColor={"#ffffff"}
            checked={true}
            onValueChange={() => {
              console.log();
            }}
          />
        </View>
        <View style={styles.containerTextTracking}>
          <Text style={styles.nameTracking}>{item.title}</Text>
          <Text style={styles.timeTracking}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.lineSeparator}></View>
    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.containerScroll}>
      <Modal
        style={styles.bottomModalView}
        isVisible={isModalVisibleTracking}
        backdropOpacity={0}
        onBackdropPress={toggleModalTracking}
      >
        <View style={styles.modalTracking}>
          <TouchableOpacity
            style={{ alignSelf: "flex-start" }}
            onPress={toggleModalTracking}
          >
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-close" : "md-close"}
              color="#FF7F50"
              style={styles.iconCloseModal}
            />
          </TouchableOpacity>
          <Text style={styles.titleModalTracking}>
            Seguimiento de recolección
          </Text>
          <View>
            <FlatList
              style={styles.containerTrackings}
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={trackingsOrders}
              renderItem={renderTracking}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
        </View>
      </Modal>
      <View>
        <View style={styles.containerStatus}>
          <TouchableOpacity onPress={toggleModalTracking}>
            <Text style={styles.textStatus}>
              {detail[0].status}
              <Icon
                type="ionicon"
                name={
                  Platform.OS === "ios"
                    ? "ios-chevron-forward"
                    : "md-chevron-forward"
                }
                color="#FF7F50"
                style={styles.iconArrowForward}
                size={22}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View>
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
        </View>
        <View style={styles.containerItemData}>
          <View style={styles.containerStatus}>
            <Text style={styles.textThanks}>Gracias por tus comentarios.</Text>
          </View>
          <View style={styles.containerStars}>
            <View style={styles.containerDetail}>
              <View
                style={{
                  width: "90%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type="ionicon"
                  name={Platform.OS === "ios" ? "ios-star" : "md-star"}
                  color="#FF7F50"
                  size={30}
                />
                <Icon
                  type="ionicon"
                  name={Platform.OS === "ios" ? "ios-star" : "md-star"}
                  color="#FF7F50"
                  size={30}
                />
                <Icon
                  type="ionicon"
                  name={Platform.OS === "ios" ? "ios-star" : "md-star"}
                  color="#FF7F50"
                  size={30}
                />
                <Icon
                  type="ionicon"
                  name={Platform.OS === "ios" ? "ios-star" : "md-star"}
                  color="#FF7F50"
                  size={30}
                />
                <Icon
                  type="ionicon"
                  name={Platform.OS === "ios" ? "ios-star" : "md-star"}
                  color="#FF7F50"
                  size={30}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerItem}>
          <View style={styles.containerStatus}>
            <Text style={styles.textThanks}>Información de contacto.</Text>
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.containerDetail}>
              <View style={{ width: "20%" }}>
                <Image
                  style={styles.buyImageContainer}
                  source={{
                    uri:
                      "https://sanfranciscodekkerlab.com/dekkershop/icono-fondo.png",
                  }}
                />
              </View>

              <View style={{ width: "80%" }}>
                <View>
                  <Text style={styles.titleBuy}>San Francisco Dekkerlab</Text>
                  <View style={styles.pillPayment}>
                    <Text style={styles.titlePayment}>
                      {detail[0].sucursal}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.containerDetailInfo}>
              <View style={{ width: "100%" }}>
                <View>
                  <Text style={styles.titleDirection}>
                    {detail[0].directionSucursal}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerDate}>
            <View style={{ width: "40%" }}>
              <Text style={styles.textDate}>{detail[0].numberSucursal}</Text>
            </View>
            <View style={{ width: "60%" }}>
              <Text style={styles.textDate}>sanfranciscodekkerlab.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerItemProducts}>
          <View style={styles.containerStatus}>
            <Text style={styles.textDetail}>Detalles del Pedido</Text>
          </View>
          <View style={styles.containerInfo}>
            <View style={styles.containerDetail}>
              <View style={{ width: "20%" }}>
                <Image
                  style={styles.buyImageContainer}
                  source={{ uri: detail[0].photo }}
                />
              </View>

              <View style={{ width: "35%" }}>
                <View>
                  <Text style={styles.titleBuy}>{detail[0].title}</Text>
                  <View style={styles.pillPayment}>
                    <Text style={styles.titlePayment}>{detail[0].payment}</Text>
                  </View>
                </View>
              </View>
              <View style={{ width: "45%" }}>
                <View>
                  <Text style={styles.textAmount}>
                    MX${detail[0].total.toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.containerDetailInfoProducts}>
              <View style={{ width: "100%" }}>
                <View style={styles.containerProducts}>
                  <Text style={styles.textObservation}>
                    {detail[0].observations}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ width: "100%" }}>
              <Text style={styles.textDetail}>Dirección de entrega</Text>
            </View>
            <View style={styles.containerDetailInfo}>
              <View style={{ width: "100%" }}>
                <View>
                  <Text style={styles.titleDirection}>
                    {detail[0].deliveryAddress}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ width: "100%", top: 10 }}>
              <Text style={styles.textDetail}>Hora del pedido</Text>
            </View>

            <View style={{ width: "100%" }}>
              <View>
                <Text style={styles.textDatePurchase}>
                  {detail[0].datePurchase}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
