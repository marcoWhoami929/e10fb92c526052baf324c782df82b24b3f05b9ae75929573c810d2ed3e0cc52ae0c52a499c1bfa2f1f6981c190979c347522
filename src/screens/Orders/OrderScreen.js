import React, { useLayoutEffect } from "react";
import {
  FlatList,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import styles from "./styles";
import stylesTemplate from "../templateStyles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import { Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { directions, cards } from "../../data/dataArrays";
import { orders } from "../../data/dataArrays";

export default function OrderScreen(props) {
  const { navigation } = props;

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
  const onPressOrder = (id) => {
    navigation.navigate("OrderDetail", { id });
  };
  const renderOrder = ({ item }) => (
    <TouchableOpacity onPress={() => onPressOrder(item.id)}>
      <View style={styles.containerItem}>
        <View style={styles.containerStatus}>
          <Text style={styles.textStatus}>{item.status}</Text>
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.containerDetail}>
            <View style={{ width: "20%" }}>
              <Image
                style={styles.buyImageContainer}
                source={{ uri: item.photo }}
              />
            </View>

            <View style={{ width: "40%" }}>
              <View>
                <Text style={styles.titleBuy}>{item.sucursal}</Text>
                <View style={styles.pillPayment}>
                  <Text style={styles.titlePayment}>{item.payment}</Text>
                </View>
              </View>
            </View>
            <View style={{ width: "40%" }}>
              <View>
                <Text style={styles.textAmount}>
                  MX${item.total.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.containerDetailInfo}>
            <View style={{ width: "100%" }}>
              <View style={styles.containerDetails}>
                <Text style={styles.titleProduct}>{item.observations}</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerDetailMap}>
            <View style={{ width: "100%" }}>
              <View style={styles.containerDetails}>
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
            </View>
          </View>
        </View>
        <View style={styles.containerDate}>
          <Text style={styles.textDate}>{item.datePurchase}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.containerScroll}>
      <View>
        <FlatList
          data={orders}
          renderItem={renderOrder}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </ScrollView>
  );
}
