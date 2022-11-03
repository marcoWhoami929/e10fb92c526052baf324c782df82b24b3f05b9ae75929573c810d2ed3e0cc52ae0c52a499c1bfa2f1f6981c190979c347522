import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Icon } from "react-native-elements";
export default function ButtonUpdateDirection(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.containerCheckout}>
        <Icon
          type="ionicon"
          name={Platform.OS === "ios" ? "ios-reload" : "md-reload"}
          color="#ffffff"
          size={18}
        />
        <Text style={styles.text}>Actualizar</Text>
      </View>
    </TouchableOpacity>
  );
}

ButtonUpdateDirection.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
