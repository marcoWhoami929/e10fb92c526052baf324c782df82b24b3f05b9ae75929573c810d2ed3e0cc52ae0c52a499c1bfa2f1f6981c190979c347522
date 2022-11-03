import React, { useLayoutEffect, useState, useRef } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import styles from "./styles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { WebView } from "react-native-webview";

import { magazine } from "../../data/dataArrays";
const { width: viewportWidth } = Dimensions.get("window");
export default function PromotionsScreen(props) {
  const { navigation } = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const slider1Ref = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: { fontSize: 18, color: "#ffffff" },
      headerLeft: () => (
        <View>
          <BackButtonGeneral
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      ),
      headerRight: () => (
        <HeaderIconsRight
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
    });
  }, []);
  const renderImage = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: item.photo }} />
    </View>
  );

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.imageContainer}>
        <WebView
          source={{
            uri:
              "https://sanfranciscodekkerlab.com/dekkershop/revista/revista.pdf",
          }}
        />
      </View>
    </ScrollView>
  );
}
