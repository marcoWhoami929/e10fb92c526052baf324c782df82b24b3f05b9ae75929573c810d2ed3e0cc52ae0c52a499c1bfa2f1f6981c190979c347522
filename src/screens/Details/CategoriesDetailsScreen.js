import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { getCategoryName, getAllCategories } from "../../data/MockDataAPI";

export default function CategoriesDetailsScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.categories;
  const categoriesArray = getAllCategories(item);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

  const onPressCategory = (item) => {
    let name = getCategoryName(item.categoryId);
    let category = item.categoryId;
    navigation.navigate("Category", { category, name });
  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressCategory(item[0])}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: "grey" }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={categoriesArray}
        renderItem={renderCategory}
        keyExtractor={(item) => `${item.productId}`}
      />
    </View>
  );
}
