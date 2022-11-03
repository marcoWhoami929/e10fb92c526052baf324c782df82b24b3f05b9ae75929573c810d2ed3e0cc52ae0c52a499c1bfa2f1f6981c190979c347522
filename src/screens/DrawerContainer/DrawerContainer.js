import React, { useContext, useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import { Avatar } from "react-native-elements";
import { CartContext } from "../../Context/CartContext.js";
import { Icon } from "react-native-elements";
export default function DrawerContainer(props) {
  const { navigation } = props;
  const { login } = useContext(CartContext);
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <View
          style={{
            width: "30%",
            marginLeft: 15,
          }}
        >
          <Avatar
            source={{
              uri:
                "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg",
            }}
            size={60}
            rounded
            activeOpacity={0.7}
          />
        </View>
        <View
          style={{
            width: "70%",
          }}
        >
          {login === false ? (
            <Text style={styles.nameUser}></Text>
          ) : (
            <Text style={styles.nameUser}>Marco Antonio Lopez Perez</Text>
          )}

          {login === false ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Welcome");
              }}
            >
              <View style={styles.btnLoginOutline}>
                <Icon
                  type="ionicon"
                  name={Platform.OS === "ios" ? "ios-log-in" : "md-log-in"}
                  color="#ffffff"
                  size={22}
                />
                <Text style={styles.textBotonLoginOutline}>Acceder</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <Text style={styles.editUser}>
                Editar mi perfil
                <Icon
                  type="ionicon"
                  name={
                    Platform.OS === "ios"
                      ? "ios-chevron-forward"
                      : "md-chevron-forward"
                  }
                  color="#E5E5E5"
                  size={14}
                  style={styles.icon}
                />
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          <MenuButton
            title="Inicio"
            source={require("../../../assets/icons/inicio.png")}
            onPress={() => {
              navigation.navigate("Home");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Mis solicitudes"
            source={require("../../../assets/icons/solicitudes.png")}
            onPress={() => {
              navigation.navigate("Orders");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Recolección de tapas"
            source={require("../../../assets/icons/recoleccion.png")}
            onPress={() => {
              navigation.navigate("Pickup");
              navigation.closeDrawer();
            }}
          />

          <MenuButton
            title="Recompensas"
            source={require("../../../assets/icons/recompensas.png")}
            onPress={() => {
              navigation.navigate("Rewards");
              navigation.closeDrawer();
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
