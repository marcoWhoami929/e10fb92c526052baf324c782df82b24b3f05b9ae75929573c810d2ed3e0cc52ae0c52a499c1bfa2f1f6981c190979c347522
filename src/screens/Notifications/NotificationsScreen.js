import React, { useLayoutEffect } from "react";
import {
  FlatList,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import styles from "./styles";
import stylesTemplate from "../templateStyles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import { Icon } from "react-native-elements";
import { notifications } from "../../data/dataArrays";

export default function NotificationsScreen(props) {
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

  const renderNotification = ({ item }) => (
    <View style={styles.containerItem}>
      <View>
        <Text style={styles.textTitle}>{item.title}</Text>
        <View style={styles.containerMain}>
          <View
            style={{
              width: "85%",
              height: 60,
            }}
          >
            <Text style={styles.textMessage}>{item.message}</Text>
          </View>

          <View
            style={{
              width: "15%",
              alignItems: "center",
              height: 60,
            }}
          >
            <TouchableOpacity>
              <Icon
                type="ionicon"
                name={
                  Platform.OS === "ios"
                    ? "ios-trash-bin-outline"
                    : "md-trash-bin-outline"
                }
                color="#FF7F50"
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.textNumberPhone}></Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.containerScroll}>
      <View>
        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    </ScrollView>
  );
}
