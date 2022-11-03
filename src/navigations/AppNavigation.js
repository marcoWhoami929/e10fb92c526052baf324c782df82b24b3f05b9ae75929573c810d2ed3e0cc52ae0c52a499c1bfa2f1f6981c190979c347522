import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/Home/HomeScreen";
import BrandsScreen from "../screens/Brands/BrandsScreen";
import ProductScreen from "../screens/Product/ProductScreen";
import ProductsListScreen from "../screens/ProductsList/ProductsListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import RankingScreen from "../screens/Ranking/RankingScreen";
import CategoryScreen from "../screens/Category/CategoryScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import RankingsDetailsScreen from "../screens/Details/RankingsDetailsScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          flex: 1,
        },
        headerStyle: {
          backgroundColor: "#0036AE",
          height: 110,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Home"
        options={{
          title: "",
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: "Marcas",
        }}
        name="Brands"
        component={BrandsScreen}
      />
      <Stack.Screen
        name="Product"
        options={{
          title: "",
        }}
        component={ProductScreen}
      />
      <Stack.Screen name="ProductsList" component={ProductsListScreen} />
      <Stack.Screen name="Ranking" component={RankingScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="RankingsDetails" component={RankingsDetailsScreen} />
      <Stack.Screen
        options={{
          title: "Categorias",
        }}
        name="Categories"
        component={CategoriesScreen}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Main"
      drawerStyle={{
        width: 250,
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={({ navigation }) => (
        <DrawerContainer navigation={navigation} />
      )}
    >
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
