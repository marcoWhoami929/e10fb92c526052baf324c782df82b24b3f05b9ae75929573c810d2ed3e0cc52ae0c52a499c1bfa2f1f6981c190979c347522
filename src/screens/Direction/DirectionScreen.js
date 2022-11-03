import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { View, ScrollView, Alert } from "react-native";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import styles from "./styles";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { MARKERS_DATA } from "./data";
//AIzaSyA_dlGznsov-uJDQUmmsHIR_vsA103iiLc--key-maps
export default function Direction(props) {
  const { navigation } = props;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",

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
  const onUpdateDirection = () => {
    Alert.alert(
      "Actualizar!",
      "Comfirma actualizar la dirección de entrega de su pedido.",
      [
        { text: "Si", onPress: () => console.log("Actualizado") },
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

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.containerDirection}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 19.033333,
            longitude: -98.183334,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
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
            ></Marker>
          ))}
        </MapView>
      </View>
    </ScrollView>
  );
}
