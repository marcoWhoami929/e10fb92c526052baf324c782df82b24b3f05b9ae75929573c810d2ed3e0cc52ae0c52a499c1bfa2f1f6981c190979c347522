import React from "react";
import { TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Icon } from "react-native-elements";
export default function ButtonWishList(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Icon
          type="ionicon"
          name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
          color="#ffffff"
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
}

ButtonWishList.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
