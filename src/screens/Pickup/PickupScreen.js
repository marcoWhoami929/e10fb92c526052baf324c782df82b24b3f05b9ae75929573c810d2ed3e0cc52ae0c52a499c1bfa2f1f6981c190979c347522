import React, { useLayoutEffect, useState } from "react";
import {
  FlatList,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import styles from "./styles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import MapView, { Marker } from "react-native-maps";
import { MARKERS_DATA } from "../../data/dataDirections";
import { Icon } from "react-native-elements";
import ButtonPickup from "../../components/ButtonPickup/ButtonPickup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from "@react-native-picker/picker";
import Modal from "react-native-modal";
import Spinner from "react-native-loading-spinner-overlay";

export default function PickupScreen(props) {
  const { navigation } = props;
  const [sucursal, setSucursal] = useState("");
  const [observations, setObservations] = useState("");
  const [modalSucursales, setModalSucursales] = useState(false);
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Orders");
    }, 3000);
  };

  const toggleModal = () => {
    setModalSucursales(!modalSucursales);
  };

  const itemsInPicker = MARKERS_DATA.map((data) => {
    return <Picker.Item label={data.name} key={data.id} value={data.name} />;
  });

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

  return (
    <ScrollView style={styles.containerScroll}>
      <KeyboardAwareScrollView style={{ height: 800 }}>
        <View>
          <Spinner
            visible={loading}
            textContent={"Generando Solicitud..."}
            textStyle={styles.spinnerTextStyle}
          />
          <Modal
            style={styles.bottomModalView}
            isVisible={modalSucursales}
            backdropOpacity={0}
            onBackdropPress={toggleModal}
          >
            <View style={styles.modalSucursals}>
              <TouchableOpacity
                style={{ alignSelf: "flex-start" }}
                onPress={toggleModal}
              >
                <Icon
                  type="ionicon"
                  name={Platform.OS === "ios" ? "ios-close" : "md-close"}
                  color="#FF7F50"
                  size={28}
                  style={styles.iconCloseModal}
                />
              </TouchableOpacity>
              <View style={styles.containerListSucursals}>
                <Picker
                  selectedValue={sucursal}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    setSucursal(itemValue)
                  }
                >
                  {itemsInPicker}
                </Picker>
              </View>
            </View>
          </Modal>
          <View style={styles.containerItemMap}>
            <View>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 19.011678573633223,
                  longitude: -98.20579149971392,
                  latitudeDelta: 0.2,
                  longitudeDelta: 0.2,
                }}
                mapType="standard"
                showsUserLocation={true}
              >
                {MARKERS_DATA.map((marker) => (
                  <Marker
                    key={marker.id}
                    coordinate={{
                      latitude: marker.latitude,
                      longitude: marker.longitude,
                    }}
                    title={marker.name}
                    description={marker.direction}
                    onPress={() => setSucursal(marker.name)}
                  ></Marker>
                ))}
              </MapView>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={styles.containerBottoms}>
              <Icon
                type="ionicon"
                name={
                  Platform.OS === "ios" ? "ios-chevron-back" : "md-chevron-back"
                }
                color="#FF7F50"
                style={styles.icon}
                size={25}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.containerMain}>
            <View style={styles.containerItem}>
              <View>
                <View style={styles.containerTitle}>
                  <TouchableOpacity onPress={toggleModal}>
                    <Text style={styles.title}>Elegir Sucursal:</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.searchContainer}>
                  <Icon
                    type="ionicon"
                    name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                    color="#FF7F50"
                  />

                  <TextInput
                    style={styles.input}
                    onChangeText={setSucursal}
                    value={sucursal}
                    placeholder="¿Cuál es tu sucursal favorita?"
                    placeholderTextColor="#333333"
                    placeholderfontweigth="bold"
                    editable={false}
                    onPressIn={toggleModal}
                  />
                </View>

                <View style={styles.containerTitle}>
                  <Text style={styles.subtitle}>Observaciones:</Text>
                </View>
                <View style={styles.containerTitle}>
                  <TextInput
                    style={styles.inputObservations}
                    value={observations}
                    placeholder="Instrucciones para tu recolección"
                    placeholderTextColor="#C6C6C6"
                    placeholderfontweigth="bold"
                    onChangeText={setObservations}
                  />
                </View>
                <View style={styles.containerButtonPickup}>
                  <TouchableOpacity>
                    <ButtonPickup onPress={startLoading}></ButtonPickup>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
}
