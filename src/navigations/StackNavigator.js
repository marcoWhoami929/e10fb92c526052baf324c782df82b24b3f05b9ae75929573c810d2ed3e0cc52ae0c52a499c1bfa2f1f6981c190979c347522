import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home/HomeScreen";
import BrandsScreen from "../screens/Brands/BrandsScreen";
import ProductScreen from "../screens/Product/ProductScreen";
import ProductsListScreen from "../screens/ProductsList/ProductsListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import CategoryScreen from "../screens/Category/CategoryScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import CartScreen from "../screens/Cart/CartScreen";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";
import ProductsScreen from "../screens/Products/ProductsScreen";
import CheckoutScreen from "../screens/Checkout/CheckoutScreen";
import DirectionScreen from "../screens/Direction/DirectionScreen";
import ShoppingScreen from "../screens/Shopping/ShoppingScreen";
import PromotionsScreen from "../screens/Promotions/PromotionsScreen";
import CardScreen from "../screens/Card/CardScreen";
import OrderScreen from "../screens/Orders/OrderScreen";
import PickupScreen from "../screens/Pickup/PickupScreen";
import RewardsScreen from "../screens/Rewards/RewardsScreen";
import ProfileScreen from "../screens/User/ProfileScreen";
import NotificationsScreen from "../screens/Notifications/NotificationsScreen";
import OrderDetailScreen from "../screens/Orders/OrderDetailScreen";
import ShoppingDetailScreen from "../screens/Shopping/ShoppingDetailScreen";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPassword/ForgotPasswordScreen";
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerTitleStyle: {
    fontWeight: "bold",
    alignItems: "flex-start",
    alignContents: "flex-start",
    flex: 1,
  },
  headerStyle: {
    backgroundColor: "#0036AE",
    height: 110,
    shadowColor: "transparent", // ios
    elevation: 0, // android
  },
  headerTintColor: "#ffffff",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
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
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen
        name="Search"
        options={{
          title: "",
        }}
        component={SearchScreen}
      />

      <Stack.Screen
        options={{
          title: "Categorias",
        }}
        name="Categories"
        component={CategoriesScreen}
      />
      <Stack.Screen
        options={{
          title: "Carrito",
        }}
        name="Cart"
        component={CartScreen}
      />
      <Stack.Screen
        options={{
          title: "Favoritos",
        }}
        name="Favorites"
        component={FavoritesScreen}
      />
      <Stack.Screen
        options={{
          title: "",
        }}
        name="Products"
        component={ProductsScreen}
      />
      <Stack.Screen
        options={{
          title: "Finalizar Compra",
        }}
        name="Checkout"
        component={CheckoutScreen}
      />
      <Stack.Screen
        options={{
          title: "",
        }}
        name="Direction"
        component={DirectionScreen}
      />
      <Stack.Screen
        options={{
          title: "Agrega tu tarjeta",
        }}
        name="Card"
        component={CardScreen}
      />
      <Stack.Screen
        options={{
          title: "Mis Solicitudes",
        }}
        name="Orders"
        component={OrderScreen}
      />
      <Stack.Screen
        options={{
          title: "Recoleccíon",
        }}
        name="Pickup"
        component={PickupScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          title: "Mis Recompensas",
        }}
        name="Rewards"
        component={RewardsScreen}
      />
      <Stack.Screen
        options={{
          title: "Mi Perfil",
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          title: "Mis Notificaciones",
        }}
        name="Notifications"
        component={NotificationsScreen}
      />
      <Stack.Screen
        options={{
          title: "",
        }}
        name="OrderDetail"
        component={OrderDetailScreen}
      />
      <Stack.Screen
        options={{
          title: "",
        }}
        name="ShoppingDetail"
        component={ShoppingDetailScreen}
      />
      <Stack.Screen
        options={{
          title: "Mis Compras",
        }}
        name="Shopping"
        component={ShoppingScreen}
      />
      <Stack.Screen
        options={{
          title: "",
        }}
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          title: "",
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          title: "",
        }}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{
          title: "",
        }}
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          title: "",
        }}
        name="Search"
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};
const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          title: "Favoritos",
        }}
        name="Favorites"
        component={FavoritesScreen}
      />
    </Stack.Navigator>
  );
};
const ShoppingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          title: "Mis Compras",
        }}
        name="Shopping"
        component={ShoppingScreen}
      />
    </Stack.Navigator>
  );
};
const PromotionsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{
          title: "Promociones",
        }}
        name="Promotions"
        component={PromotionsScreen}
      />
    </Stack.Navigator>
  );
};
export {
  MainStackNavigator,
  SearchStackNavigator,
  FavoritesStackNavigator,
  ShoppingStackNavigator,
  PromotionsStackNavigator,
};
