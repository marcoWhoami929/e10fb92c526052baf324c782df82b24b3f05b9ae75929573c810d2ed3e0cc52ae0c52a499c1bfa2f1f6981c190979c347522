import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Icon } from "react-native-elements";
export default function ButtonPickup(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.containerPickup}>
        <Icon
          type="ionicon"
          name={Platform.OS === "ios" ? "ios-beaker" : "md-beaker"}
          color="#ffffff"
          size={18}
        />
        <Text style={styles.text}>Solicitar</Text>
      </View>
    </TouchableOpacity>
  );
}

ButtonPickup.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
