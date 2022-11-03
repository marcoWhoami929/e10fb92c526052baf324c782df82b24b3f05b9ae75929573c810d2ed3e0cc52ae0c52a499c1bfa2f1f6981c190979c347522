import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Icon } from "react-native-elements";
export default function ViewIngredientsButton(props) {
  return (
    <TouchableOpacity
      underlayColor="rgba(73,182,77,0.9)"
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <Icon
          type="ionicon"
          name={Platform.OS === "ios" ? "ios-eye" : "md-eye"}
          color="#ffffff"
        />
      </View>
    </TouchableOpacity>
  );
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
