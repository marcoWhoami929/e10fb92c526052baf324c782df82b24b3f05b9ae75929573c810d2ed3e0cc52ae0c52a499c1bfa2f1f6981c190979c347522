import React, { useContext } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Icon } from "react-native-elements";
import { CartContext } from "../../Context/CartContext";
export default function HeaderIconsRight() {
  const navigation = useNavigation();
  const { getItemsCount } = useContext(CartContext);
  return (
    <View style={styles.iconContainer}>
      <Icon
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
        color="#ffffff"
        onPress={() => {
          navigation.navigate("Notifications");
        }}
      />
      <View style={styles.itemsCart}>
        <Text style={styles.textItemsCart}>0</Text>
      </View>
      <Icon
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
        color="#ffffff"
        onPress={() => {
          navigation.navigate("Cart");
        }}
      />

      <View style={styles.itemsCart}>
        <Text style={styles.textItemsCart}>{getItemsCount()}</Text>
      </View>
    </View>
  );
}
