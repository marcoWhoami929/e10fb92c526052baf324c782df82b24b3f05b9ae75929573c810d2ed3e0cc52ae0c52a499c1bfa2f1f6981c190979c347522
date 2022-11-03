import React, { useLayoutEffect } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import stylesTemplate from "../templateStyles";
import { brands } from "../../data/dataArrays";
import { getNumberOfProducts } from "../../data/MockDataAPI";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import { Icon } from "react-native-elements";

export default function BrandsScreen(props) {
  const { navigation } = props;

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

  const onPressBrand = (item) => {
    const title = item.name;
    const brand = item;
    navigation.navigate("ProductsList", { brand, title });
  };

  const renderBrand = ({ item }) => (
    <TouchableOpacity onPress={() => onPressBrand(item)}>
      <View style={styles.brandsItemContainer}>
        <Image
          style={styles.brandImageContainer}
          source={{ uri: item.photo_url_main }}
        />
        <View style={styles.brandInfoContainer}>
          <Text style={styles.brandsName}>{item.subtitle}</Text>
          <View style={styles.brandsOptions}>
            <View>
              <Icon
                type="ionicon"
                style={styles.icons}
                name={Platform.OS === "ios" ? "ios-star" : "md-star"}
                color="#FF7F50"
                size={18}
              />
            </View>
            <View>
              <Text style={styles.brandsInfo}>0</Text>
            </View>
            <View>
              <Icon
                type="ionicon"
                style={styles.icons}
                name={Platform.OS === "ios" ? "ios-basket" : "md-basket"}
                color="#FF7F50"
                size={18}
              />
            </View>
            <View>
              <Text style={styles.brandsInfo}>
                {getNumberOfProducts(item.id)}
              </Text>
            </View>
          </View>
          <View style={styles.brandOffert}>
            <Text style={styles.textOffert}>Ahorra hasta un {item.desc} %</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={stylesTemplate.containerScroll}>
      <View>
        <FlatList
          data={brands}
          renderItem={renderBrand}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </ScrollView>
  );
}
