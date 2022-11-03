import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import PropTypes from "prop-types";
import { Icon } from "react-native-elements";
import styles from "./styles";

export default function HeaderIconsLeft(props) {
  const { navigation } = props;
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={props.onPress}>
      <View style={styles.iconContainerLeft}>
        <Icon
          type="ionicon"
          name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
          color="#ffffff"
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
}

HeaderIconsLeft.propTypes = {
  onPress: PropTypes.func,
};
