import React, { useLayoutEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import ButtonSaveCard from "../../components/ButtonCard/ButtonSaveCard";
import Spinner from "react-native-loading-spinner-overlay";
export default function CardScreen(props) {
  const { navigation } = props;
  const [numberCard, setNumberCard] = useState("4152 3131 6503 7925");
  const [nameCard, setNameCard] = useState("Marco A. Lopez Perez");
  const [expiredCard, setExpiredCard] = useState("01/25");
  const [cvvCard, setCvvCard] = useState("111");
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Checkout");
    }, 3000);
  };

  const cardNumber = (number) => {
    setNumberCard(
      number
        .replace(/\s?/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
    );
  };
  const cardExpired = (text) => {
    if (text.indexOf(".") >= 0 || text.length > 5) {
      return;
    }

    if (text.length === 2 && cardExpired.length === 1) {
      text += "/";
    }

    // Update the state, which in turns updates the value in the text field
    setExpiredCard(text);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontSize: 18,
        color: "#ffffff",
      },
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
      <ScrollView style={styles.containerMain}>
        <KeyboardAwareScrollView style={{ height: 600 }}>
          <Spinner
            visible={loading}
            textContent={"Agregando Tarjeta..."}
            textStyle={styles.spinnerTextStyle}
          />
          <View style={styles.containerCard}>
            <Image
              style={styles.card}
              source={{
                uri:
                  "https://sanfranciscodekkerlab.com/dekkershop/card-mastercard.png",
              }}
            />
          </View>

          <View style={styles.containerDataCard}>
            <Text style={styles.numberCard}>{numberCard}</Text>
            <Text style={styles.expiredCard}>{expiredCard}</Text>
            <Text style={styles.nameCard}>{nameCard}</Text>
          </View>

          <View style={styles.containerInfoCard}>
            <View style={{ width: "90%", marginLeft: "5%" }}>
              <Text style={styles.titleInfoCard}>Número de tarjeta</Text>
            </View>
            <View style={{ width: "90%", marginLeft: "5%" }}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => cardNumber(text)}
                value={numberCard}
                placeholder="0000 0000 0000 0000"
                placeholderTextColor="#cccccc"
                keyboardType="numeric"
              />
            </View>
            <View style={{ width: "90%", marginLeft: "5%", top: 10 }}>
              <Text style={styles.titleInfoCard}>Titular</Text>
            </View>
            <View style={{ width: "90%", marginLeft: "5%", top: 10 }}>
              <TextInput
                style={styles.input}
                onChangeText={setNameCard}
                value={nameCard}
                placeholder="Nombre del titular"
                placeholderTextColor="#cccccc"
              />
            </View>
            <View
              style={{
                width: "100%",
                marginLeft: "5%",
                top: 20,
                marginBottom: 10,
              }}
            >
              <View style={{ width: "100%", flexDirection: "row" }}>
                <Text style={styles.titleInfoCard}>CVV</Text>
                <Text style={styles.expiredInfoCard}>Vencimiento</Text>
              </View>
              <View style={{ width: "42%", flexDirection: "row" }}>
                <TextInput
                  style={styles.input}
                  onChangeText={setCvvCard}
                  value={cvvCard}
                  placeholder="MM/AA"
                  placeholderTextColor="#cccccc"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.inputCvv}
                  onChangeText={(text) => cardExpired(text)}
                  value={expiredCard}
                  placeholder="CVV"
                  placeholderTextColor="#cccccc"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={{ width: "90%", marginLeft: "5%", top: 30 }}>
              <TouchableOpacity>
                <ButtonSaveCard onPress={startLoading}></ButtonSaveCard>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
}
