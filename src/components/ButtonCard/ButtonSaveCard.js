import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Icon } from "react-native-elements";
export default function ButtonSaveCard(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.containerCard}>
        <Icon
          type="ionicon"
          name={Platform.OS === "ios" ? "ios-card-outline" : "md-card-outline"}
          color="#ffffff"
          size={18}
        />
        <Text style={styles.text}>Agregar</Text>
      </View>
    </TouchableOpacity>
  );
}

ButtonSaveCard.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
