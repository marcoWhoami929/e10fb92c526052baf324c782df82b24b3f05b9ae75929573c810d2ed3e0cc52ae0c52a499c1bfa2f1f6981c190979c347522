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

export default function RewardsScreen(props) {
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

  return (
    <ScrollView style={styles.containerScroll}>
      <View>
        <TouchableOpacity>
          <View style={styles.containerItem}>
            <View>
              <Text style={styles.textTitle}></Text>
              <View style={styles.containerDirection}>
                <View style={{ width: "70%", flexDirection: "row" }}></View>

                <View style={{ width: "30%", flexDirection: "row" }}>
                  <TouchableOpacity>
                    <Icon
                      type="ionicon"
                      name={
                        Platform.OS === "ios"
                          ? "ios-create-outline"
                          : "md-create-outline"
                      }
                      color="#FF7F50"
                      size={25}
                      style={{ marginLeft: 35, top: 0 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.textNumberPhone}></Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
