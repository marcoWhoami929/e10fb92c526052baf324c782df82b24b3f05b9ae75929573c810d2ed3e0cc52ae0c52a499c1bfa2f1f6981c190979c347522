import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import {
  MainStackNavigator,
  FavoritesStackNavigator,
  SearchStackNavigator,
  ShoppingStackNavigator,
  PromotionsStackNavigator,
} from "./StackNavigator";
import { Icon } from "react-native-elements";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={MainStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
              color="#FF7F50"
              size={25}
            />
          ),
          tabBarActiveTintColor: "#FF7F50",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Mis Compras"
        component={ShoppingStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-basket" : "md-basket"}
              color="#FF7F50"
              size={25}
            />
          ),
          tabBarActiveTintColor: "#FF7F50",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Buscador"
        component={SearchStackNavigator}
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <View
              style={{
                position: "absolute",
                bottom: 5, // space from bottombar
                height: 58,
                width: 58,
                borderRadius: 58,
                backgroundColor: "#0036AE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon
                type="ionicon"
                name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                color="#ffffff"
                size={25}
              />
            </View>
          ),
          tabBarActiveTintColor: "#FF7F50",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Promociones"
        component={PromotionsStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-pricetags" : "md-pricetags"}
              color="#FF7F50"
              size={25}
            />
          ),
          tabBarActiveTintColor: "#FF7F50",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Mis Favoritos"
        component={FavoritesStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
              color="#FF7F50"
              size={25}
            />
          ),
          tabBarActiveTintColor: "#FF7F50",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
