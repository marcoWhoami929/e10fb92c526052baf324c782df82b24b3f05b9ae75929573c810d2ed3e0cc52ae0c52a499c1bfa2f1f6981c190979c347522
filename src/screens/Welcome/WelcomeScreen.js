import React, { useLayoutEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import stylesTemplate from "../templateStyles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import { Icon } from "react-native-elements";
import TypeWriter from "react-native-typewriter";

export default function WelcomeScreen(props) {
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

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <View style={styles.containerItem}>
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://sanfranciscodekkerlab.com/dekkershop/pancho-pintor.png",
            }}
          />
        </View>
      </View>
      <View style={styles.containerItemWelcome}>
        <View style={styles.containerTitle}>
          <View
            style={{
              width: "100%",
            }}
          >
            <TypeWriter typing={1} style={styles.texWelcome}>
              Bienvenido
            </TypeWriter>
          </View>
        </View>
        <View style={styles.containerContent}>
          <View
            style={{
              width: "90%",
            }}
          >
            <Text style={styles.textContent}>
              San Francisco Dekkerlab se renueva para ti y ahora te lleva tus
              productos favoritos hasta la puerta de tu casa.
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", top: 40 }}>
          <View
            style={{
              width: "45%",
              height: 100,

              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <View style={styles.btnLogin}>
                <Icon
                  type="ionicon"
                  name={
                    Platform.OS === "ios" ? "ios-lock-closed" : "md-lock-closed"
                  }
                  color="#ffffff"
                  size={18}
                />
                <Text style={styles.textBotonLogin}>Acceder</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "45%",
              height: 100,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <View style={styles.btnRegister}>
                <Icon
                  type="ionicon"
                  name={
                    Platform.OS === "ios" ? "ios-clipboard" : "md-clipboard"
                  }
                  color="#FF7F50"
                  size={18}
                />
                <Text style={styles.textBotonRegister}>Registro</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
