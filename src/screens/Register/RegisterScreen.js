import React, { useLayoutEffect, useState } from "react";
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Icon } from "react-native-elements";

export default function RegisterScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [phone, setPhone] = useState("");
  const [direction, setDirection] = useState("");
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
    });
  }, []);

  return (
    <View style={styles.containerScroll}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Registro</Text>
        <Text style={styles.subtitle}>
          San Francisco Dekkerlab se renueva para ti y ahora te lleva tus
          productos favoritos hasta la puerta de tu casa.
        </Text>
      </View>
      <ScrollView style={styles.containerMain}>
        <KeyboardAwareScrollView style={{ height: 800 }}>
          <View style={styles.containerSubMain}>
            <View
              style={{
                width: "90%",
                top: "6%",
              }}
            >
              <Text style={styles.textTitle}>Nombre Completo</Text>
            </View>
            <View style={{ width: "90%", top: "5%" }}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setFullName(text)}
                value={fullname}
                placeholder="Nombre completo"
                placeholderTextColor="#cccccc"
              />
            </View>
            <View
              style={{
                width: "90%",
                top: "6%",
              }}
            >
              <Text style={styles.textTitle}>Correo Electr??nico</Text>
            </View>
            <View style={{ width: "90%", top: "5%" }}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Correo electr??nico"
                placeholderTextColor="#cccccc"
                keyboardType="email-address"
              />
            </View>
            <View
              style={{
                width: "90%",
                top: "6%",
              }}
            >
              <Text style={styles.textTitle}>Contrase??a</Text>
            </View>
            <View style={{ width: "90%", top: "5%" }}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Contrase??a"
                placeholderTextColor="#cccccc"
                secureTextEntry={true}
              />
            </View>
            <View
              style={{
                width: "90%",
                top: "6%",
              }}
            >
              <Text style={styles.textTitle}>Tel??fono</Text>
            </View>
            <View style={{ width: "90%", top: "5%" }}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setTelephone(text)}
                value={telephone}
                placeholder="Tel??fono"
                placeholderTextColor="#cccccc"
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                width: "90%",
                top: "6%",
              }}
            >
              <Text style={styles.textTitle}>Celular</Text>
            </View>
            <View style={{ width: "90%", top: "5%" }}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setPhone(text)}
                value={phone}
                placeholder="Celular"
                placeholderTextColor="#cccccc"
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                width: "90%",
                top: "6%",
              }}
            >
              <Text style={styles.textTitle}>Direcci??n</Text>
            </View>
            <View style={{ width: "90%", top: "5%" }}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setDirection(text)}
                value={direction}
                placeholder="Direcci??n Completa"
                placeholderTextColor="#cccccc"
              />
            </View>
            <View
              style={{
                width: "95%",
                top: "10%",
              }}
            >
              <TouchableOpacity>
                <View style={styles.btnLogin}>
                  <Icon
                    type="ionicon"
                    name={
                      Platform.OS === "ios" ? "ios-clipboard" : "md-clipboard"
                    }
                    color="#ffffff"
                    size={22}
                  />
                  <Text style={styles.textBotonLogin}>Registrarme</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
}
