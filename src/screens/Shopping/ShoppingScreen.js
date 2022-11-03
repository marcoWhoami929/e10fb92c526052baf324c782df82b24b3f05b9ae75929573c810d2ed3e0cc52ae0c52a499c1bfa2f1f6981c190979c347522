import React, { useLayoutEffect } from "react";
import {
  FlatList,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import styles from "./styles";
import stylesTemplate from "../templateStyles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import { Icon } from "react-native-elements";
import { buys } from "../../data/dataArrays";

export default function ShoppingScreen(props) {
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

  const onPressBuy = (id) => {
    navigation.navigate("ShoppingDetail", { id });
  };
  const renderBuy = ({ item }) => (
    <TouchableOpacity onPress={() => onPressBuy(item.id)}>
      <View style={styles.containerItem}>
        <View style={styles.containerStatus}>
          <Text style={styles.textStatus}>{item.status}</Text>
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.containerDetail}>
            <View style={{ width: "20%" }}>
              <Image
                style={styles.buyImageContainer}
                source={{ uri: item.photo }}
              />
            </View>

            <View style={{ width: "35%" }}>
              <View>
                <Text style={styles.titleBuy}>{item.title}</Text>
                <View style={styles.pillPayment}>
                  <Text style={styles.titlePayment}>{item.payment}</Text>
                </View>
              </View>
            </View>
            <View style={{ width: "45%" }}>
              <View>
                <Text style={styles.textAmount}>
                  MX${item.total.toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.containerDetailInfo}>
            <View style={{ width: "100%" }}>
              <View style={styles.containerDetails}>
                <Text style={styles.titleProduct}>{item.products}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerDate}>
          <Text style={styles.textDate}>{item.datePurchase}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.containerScroll}>
      <View>
        <FlatList
          data={buys}
          renderItem={renderBuy}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </ScrollView>
  );
}
