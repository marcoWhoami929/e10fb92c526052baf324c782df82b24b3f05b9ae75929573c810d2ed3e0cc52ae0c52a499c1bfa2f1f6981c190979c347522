import React from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Icon } from "react-native-elements";
export default function BackButtonGeneral(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btnContainerBack}>
      <Icon
        type="ionicon"
        name={Platform.OS === "ios" ? "ios-chevron-back" : "md-chevron-back"}
        color="#ffffff"
        size={30}
      />
    </TouchableOpacity>
  );
}

BackButtonGeneral.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
