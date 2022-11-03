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
import { Icon } from "react-native-elements";

export default function ForgotPasswordScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
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
        <Text style={styles.title}>Recuperar Contraseña</Text>
      </View>
      <ScrollView style={styles.containerMain}>
        <View style={styles.containerSubMain}>
          <View
            style={{
              width: "90%",
              top: "6%",
            }}
          >
            <Text style={styles.textTitle}>Ingresar correo electrónico</Text>
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
          </View>

          <View
            style={{
              width: "100%",
              top: "8%",
            }}
          >
            <TouchableOpacity>
              <View style={styles.btnLogin}>
                <Icon
                  type="ionicon"
                  name={
                    Platform.OS === "ios" ? "ios-lock-open" : "md-lock-open"
                  }
                  color="#ffffff"
                  size={22}
                />
                <Text style={styles.textBotonLogin}>Recuperar</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "90%",
              top: "10%",
            }}
          >
            <Text style={styles.textSubTitle}>
              *Nota: Al dar clic en el botón recuperar contraseña espere un
              momento, y recibirá una notificación de que el correo de
              recuperación de contraseña ha sido enviado exitosamente.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
