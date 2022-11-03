import React, { useLayoutEffect, useState, useContext } from "react";
import {
  FlatList,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from "react-native";
import styles from "./styles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import { Icon } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
/**CART CONTEXT */
import { CartContext } from "../../Context/CartContext.js";
/**CART CONTEXT */
export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("user@sfd.com.mx");
  const [password, setPassword] = useState("user123");
  const [loading, setLoading] = useState(false);
  const { setLogin } = useContext(CartContext);
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLogin(true);
      navigation.navigate("Home");
    }, 3000);
  };

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
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.textRegister}>Registrarme</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <View style={styles.containerScroll}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Acceso</Text>
        <Text style={styles.subtitle}>
          San Francisco Dekkerlab se renueva para ti y ahora te lleva tus
          productos favoritos hasta la puerta de tu casa.
        </Text>
      </View>
      <Spinner
        visible={loading}
        textContent={"Iniciando Sesion..."}
        textStyle={styles.spinnerTextStyle}
      />
      <ScrollView style={styles.containerMain}>
        <View style={styles.containerSubMain}>
          <View
            style={{
              width: "100%",
              top: "8%",
            }}
          >
            <View style={styles.containerImage}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://sanfranciscodekkerlab.com/dekkershop/logo.png",
                }}
              />
            </View>
          </View>
          <View style={{ width: "90%", top: "5%" }}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Correo electrónico"
              placeholderTextColor="#cccccc"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Contraseña"
              placeholderTextColor="#cccccc"
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              width: "90%",
              top: "8%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              <Text style={styles.textForgotPassword}>
                Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "95%",
              top: "10%",
            }}
          >
            <TouchableOpacity onPress={startLoading}>
              <View style={styles.btnLogin}>
                <Icon
                  type="ionicon"
                  name={Platform.OS === "ios" ? "ios-log-in" : "md-log-in"}
                  color="#ffffff"
                  size={22}
                />
                <Text style={styles.textBotonLogin}>Acceder</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "95%",
              top: "10%",
            }}
          >
            <TouchableOpacity>
              <View style={styles.btnLoginOutline}>
                <Icon
                  type="ionicon"
                  name={
                    Platform.OS === "ios" ? "ios-logo-google" : "md-logo-google"
                  }
                  color="#FF7F50"
                  size={22}
                />
                <Text style={styles.textBotonLoginOutline}>
                  Continuar con Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "95%",
              top: "10%",
            }}
          >
            <TouchableOpacity>
              <View style={styles.btnLoginOutline}>
                <Icon
                  type="ionicon"
                  name={
                    Platform.OS === "ios" ? "ios-logo-apple" : "md-logo-apple"
                  }
                  color="#FF7F50"
                  size={22}
                />
                <Text style={styles.textBotonLoginOutline}>
                  Continuar con Apple
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
