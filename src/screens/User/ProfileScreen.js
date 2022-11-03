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
import stylesTemplate from "../templateStyles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import { Avatar } from "react-native-elements";
import { Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import Modal from "react-native-modal";
import { directions } from "../../data/dataArrays";
import RoundCheckbox from "react-native-round-checkbox";
import Spinner from "react-native-loading-spinner-overlay";
export default function ProfileScreen(props) {
  const { navigation } = props;
  const [name, setName] = useState("Marco Antonio");
  const [surnames, setSurnames] = useState("Lopez Perez");
  const [email, setEmail] = useState("user@sfd.com.mx");
  const [telephone, setTelephone] = useState("2214229899");
  const [phone, setPhone] = useState("2214229899");
  const [direction, setDirection] = useState(
    "Calle Libertad 5973, San Baltazar Linda Vista, 72550 Puebla, Pue."
  );
  const [directionSelect, setDirectionSelect] = useState("");
  const [dataDirections, setIsChecked] = useState(directions);
  const [isModalVisibleDirection, setModalVisibleDirection] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [spinnerProfile, setSaveProfile] = useState(false);
  const [spinnerDirection, setSaveDirection] = useState(false);

  const saveProfile = () => {
    setSaveProfile(true);
    setTimeout(() => {
      setSaveProfile(false);
      navigation.navigate("Home");
    }, 3000);
  };
  const saveDirection = () => {
    setModalVisible(!isModalVisible);
    setTimeout(() => {
      setSaveDirection(true);
    }, 1000);

    setTimeout(() => {
      setSaveDirection(false);
      navigation.navigate("Profile");
    }, 3000);
  };
  const changeDirection = (newDirection) => {
    setDirectionSelect(newDirection);
    setModalVisibleDirection(!isModalVisibleDirection);
  };
  const handleChange = (id, newDirection) => {
    let temp = directions.map((check) => {
      if (id === check.id) {
        return { ...check, isChecked: !check.isChecked };
      }
      return check;
    });

    setIsChecked(temp);
    changeDirection(newDirection);
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
      headerRight: () => (
        <HeaderIconsRight
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
    });
  }, []);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalDirection = () => {
    setModalVisibleDirection(!isModalVisibleDirection);
  };

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

  return (
    <View style={styles.containerScroll}>
      <Spinner
        visible={spinnerProfile}
        textContent={"Actualizando Datos..."}
        textStyle={styles.spinnerTextStyle}
      />
      <Spinner
        visible={spinnerDirection}
        textContent={"Guardando dirección..."}
        textStyle={styles.spinnerTextStyle}
      />
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
        isVisible={isModalVisible}
        backdropOpacity={0}
        onBackdropPress={toggleModal}
      >
        <View style={styles.modal}>
          <ScrollView style={styles.containerMap}>
            <MapView
              style={styles.mapNew}
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
              <Text style={styles.titleMain}>Ubicacion</Text>

              <Text style={styles.textDirectionMain}>{direction}</Text>
              <Text style={styles.titleMain}>Recibe</Text>
              <View style={styles.containerInfoReception}>
                <TextInput
                  style={styles.inputGeneral}
                  onChangeText={setName}
                  value={name}
                  placeholder="Nombre"
                  placeholderTextColor="#cccccc"
                />

                <TextInput
                  style={styles.inputGeneral}
                  onChangeText={setSurnames}
                  value={surnames}
                  placeholder="Apellidos"
                  placeholderTextColor="#cccccc"
                />
              </View>
              <View style={styles.containerInfoReceptionSecond}>
                <TextInput
                  style={styles.inputNumber}
                  onChangeText={setPhone}
                  value={phone}
                  placeholder="Teléfono"
                  placeholderTextColor="#cccccc"
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.containerInfoReceptionThird}>
                <TouchableOpacity onPress={saveDirection}>
                  <View style={styles.btnUpdate}>
                    <Icon
                      type="ionicon"
                      name={Platform.OS === "ios" ? "ios-reload" : "md-reload"}
                      color="#ffffff"
                      size={22}
                    />
                    <Text style={styles.textBotonUpdate}>
                      Guardar Dirección
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <ScrollView style={styles.containerMain}>
        <View style={styles.containerItem}>
          <View style={styles.container}>
            <View
              style={{
                width: "30%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                source={{
                  uri:
                    "data:image/png;base64,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",
                }}
                size={60}
                rounded
                activeOpacity={0.7}
              />
            </View>

            <View
              style={{
                width: "70%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.textChangePhoto}>
                Editar mi foto de perfil
                <Icon
                  type="ionicon"
                  name={
                    Platform.OS === "ios"
                      ? "ios-chevron-forward"
                      : "md-chevron-forward"
                  }
                  color="#FF7F50"
                  size={14}
                  style={styles.icon}
                />
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "98%",
              alignItems: "flex-start",
              top: 15,
            }}
          >
            <Text style={styles.textTitle}>Nombre</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder=""
              placeholderTextColor="#cccccc"
            />
            <Text style={styles.textTitle}>Apellidos</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setSurnames(text)}
              value={surnames}
              placeholder=""
              placeholderTextColor="#cccccc"
            />
            <Text style={styles.textTitle}>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder=""
              placeholderTextColor="#cccccc"
            />
            <View
              style={{
                width: "98%",
                alignItems: "flex-start",
                flexDirection: "row",
                top: 10,
                left: 5,
                height: 40,
              }}
            >
              <View
                style={{
                  width: "80%",
                  alignItems: "flex-start",

                  height: 40,
                }}
              >
                <TouchableOpacity onPress={toggleModalDirection}>
                  <Text style={styles.textSubtitles}>
                    Mis Direcciones
                    <Icon
                      type="ionicon"
                      name={
                        Platform.OS === "ios"
                          ? "ios-chevron-forward"
                          : "md-chevron-forward"
                      }
                      color="#FF7F50"
                      size={18}
                      style={styles.iconSecond}
                    />
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "20%",
                  alignItems: "center",
                  height: 40,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity onPress={toggleModal}>
                  <Icon
                    type="ionicon"
                    name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                    color="#FF7F50"
                    size={28}
                  />
                </TouchableOpacity>
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
          <View
            style={{
              width: "98%",
              alignItems: "flex-start",
              top: 30,
            }}
          >
            <Text style={styles.textTitle}>Telefono</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setTelephone(text)}
              value={telephone}
              placeholder=""
              placeholderTextColor="#cccccc"
              keyboardType="numeric"
            />
            <Text style={styles.textTitle}>Celular</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPhone(text)}
              value={phone}
              placeholder=""
              placeholderTextColor="#cccccc"
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              width: "95%",
              top: "8%",
            }}
          >
            <TouchableOpacity onPress={saveProfile}>
              <View style={styles.btnUpdate}>
                <Icon
                  type="ionicon"
                  name={Platform.OS === "ios" ? "ios-reload" : "md-reload"}
                  color="#ffffff"
                  size={22}
                />
                <Text style={styles.textBotonUpdate}>Actualizar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
