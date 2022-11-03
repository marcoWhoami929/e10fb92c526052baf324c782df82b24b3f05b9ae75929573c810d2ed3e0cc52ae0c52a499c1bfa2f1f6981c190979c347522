import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Icon } from "react-native-elements";

export default function ButtonStore(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.containerCheckout}>
        <Icon
          type="ionicon"
          name={Platform.OS === "ios" ? "ios-basket" : "md-basket"}
          color="#ffffff"
          size={20}
        />
        
        <Text style={styles.text}>Comprar</Text>
      </View>
    </TouchableOpacity>
  );
}

ButtonStore.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
