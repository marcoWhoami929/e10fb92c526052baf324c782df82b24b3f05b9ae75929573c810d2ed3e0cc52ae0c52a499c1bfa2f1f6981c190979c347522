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
import { categories } from "../../data/dataArrays";
import { getNumberOfProducts, getCategoryName } from "../../data/MockDataAPI";
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

  const onPressCategory = (item) => {
    let name = getCategoryName(item.categoryId);
    let category = item.categoryId;
    navigation.navigate("Category", { category, name });
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity onPress={() => onPressCategory(item)}>
      <View style={styles.brandsItemContainer}>
        <Image
          style={styles.brandImageContainer}
          source={{ uri: item.photo_url }}
        />
        <View style={styles.brandInfoContainer}>
          <Text style={styles.brandsName}>{item.name}</Text>
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
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => `${item.categoryId}`}
        />
      </View>
    </ScrollView>
  );
}
