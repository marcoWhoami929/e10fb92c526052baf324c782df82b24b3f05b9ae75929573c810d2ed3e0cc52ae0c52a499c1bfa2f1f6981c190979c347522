import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Icon } from "react-native-elements";
export default function ButtonShop(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.containerDetail}>
        <Icon
          type="ionicon"
          name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
          color="#ffffff"
          size={18}
        />
        <Text style={styles.text}>Agregar</Text>
      </View>
    </TouchableOpacity>
  );
}

ButtonShop.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
