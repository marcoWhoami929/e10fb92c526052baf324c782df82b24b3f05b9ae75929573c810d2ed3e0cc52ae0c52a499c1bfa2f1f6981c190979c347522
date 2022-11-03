import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigations/DrawerNavigator";
import { CartProvider } from "./src/Context/CartContext";
const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
