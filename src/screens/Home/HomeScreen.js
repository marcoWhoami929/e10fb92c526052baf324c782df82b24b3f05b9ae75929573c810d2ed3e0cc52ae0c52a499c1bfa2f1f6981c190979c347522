import React, { useLayoutEffect, useRef, useState, useContext } from "react";
import {
  ScrollView,
  FlatList,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles from "./styles";
import stylesTemplate from "../templateStyles";
import { Icon } from "react-native-elements";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  products,
  banners,
  categories,
  brands,
  directions,
} from "../../data/dataArrays";
import HeaderIconsLeft from "../../components/MenusNavigation/HeaderIconsLeft";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import { getBrandName, getCategoryName } from "../../data/MockDataAPI";
import ButtonShop from "../../components/ButtonShop/ButtonShop";
import ButtonWishList from "../../components/ButtonWishList/ButtonWishList";
import RoundCheckbox from "react-native-round-checkbox";
/**CART CONTEXT */
import { CartContext } from "../../Context/CartContext.js";
/**CART CONTEXT */
import Modal from "react-native-modal";
const { width: viewportWidth } = Dimensions.get("window");

export default function HomeScreen(props) {
  const { navigation } = props;

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();
  const { addItemToCart, addItemToFavorites } = useContext(CartContext);

  const [isModalVisible, setModalVisible] = useState(true);
  const [isModalVisibleDirection, setModalVisibleDirection] = useState(false);
  const [direction, setDirection] = useState("Calle Libertad 5973...");

  const [dataDirections, setIsChecked] = useState(directions);

  const handleChange = (id, newDirection) => {
    let temp = directions.map((check) => {
      if (id === check.id) {
        return { ...check, isChecked: !check.isChecked };
      }
      return check;
    });

    setIsChecked(temp);
    changeDirection(newDirection);
  };

  const toggleModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  const toggleModalDirection = () => {
    setModalVisibleDirection(!isModalVisibleDirection);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderIconsLeft
          onPress={() => {
            navigation.openDrawer();
          }}
        />
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

  const changeDirection = (newDirection) => {
    setModalVisibleDirection(!isModalVisibleDirection);
    setDirection(newDirection);
  };

  const renderImage = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.photo_url }} />
      </View>
    </TouchableOpacity>
  );

  const onPressProduct = (item) => {
    navigation.navigate("Product", { item });
  };
  const onPressCategory = (item) => {
    let name = getCategoryName(item.categoryId);
    let category = item.categoryId;
    navigation.navigate("Category", { category, name });
  };
  const onPressBrand = (item) => {
    const title = item.name;
    const brand = item;
    navigation.navigate("ProductsList", { brand, title });
  };

  const onAddToCart = (id) => {
    const counter = 1;
    addItemToCart(id, counter);
  };
  const onAddToFavorites = (id) => {
    addItemToFavorites(id);
  };

  const renderProducts = ({ item }) => (
    <TouchableOpacity onPress={() => onPressProduct(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <View style={styles.containerBrand}>
          <Text style={styles.containerBrandName}>
            {getBrandName(item.brandId)}
          </Text>
          <View style={styles.containerDiscount}>
            {item.discount == 0 ? (
              <Text style={styles.percentDiscount}></Text>
            ) : (
              <Text style={styles.percentDiscount}>{item.discount} %</Text>
            )}
          </View>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>
          ${item.priceDiscount.toFixed(2)}
          {item.discount == 0 ? (
            <Text style={styles.priceDiscount}></Text>
          ) : (
            <Text style={styles.priceDiscount}>${item.price.toFixed(2)}</Text>
          )}
        </Text>
        <View style={styles.containerShop}>
          <View style={styles.containerShopCartItem}>
            <ButtonShop onPress={() => onAddToCart(item.productId)} />
          </View>
          <View style={styles.containerShopFavoriteItem}>
            <ButtonWishList onPress={() => onAddToFavorites(item.productId)} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderProductsSm = ({ item }) => (
    <TouchableOpacity onPress={() => onPressProduct(item)}>
      <View style={styles.containerSm}>
        <Image style={styles.photoSm} source={{ uri: item.photo_url }} />
        <View style={styles.containerBrandSm}>
          <Text style={styles.containerBrandNameSm}>
            {getBrandName(item.brandId)}
          </Text>
          <View style={styles.containerDiscountSm}>
            {item.discount == 0 ? (
              <Text style={styles.percentDiscountSm}></Text>
            ) : (
              <Text style={styles.percentDiscountSm}>{item.discount} %</Text>
            )}
          </View>
        </View>
        <Text style={styles.titleSm}>{item.title}</Text>
        <Text style={styles.priceSm}>
          ${item.priceDiscount.toFixed(2)}
          {item.discount == 0 ? (
            <Text style={styles.priceDiscountSm}></Text>
          ) : (
            <Text style={styles.priceDiscountSm}>${item.price.toFixed(2)}</Text>
          )}
        </Text>
        <View style={styles.containerShopSm}>
          <View style={styles.containerShopCartItemSm}>
            <ButtonShop onPress={() => onAddToCart(item.productId)} />
          </View>
          <View style={styles.containerShopFavoriteItemSm}>
            <ButtonWishList onPress={() => onAddToFavorites(item.productId)} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCategories = ({ item }) => (
    <TouchableOpacity onPress={() => onPressCategory(item)}>
      <View style={styles.containerCategory}>
        <Image style={styles.photoCategory} source={{ uri: item.photo_url }} />
        <Text style={styles.titleCategory}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderBrand = ({ item }) => (
    <TouchableOpacity onPress={() => onPressBrand(item)}>
      <View style={styles.containerCategory}>
        <Image
          style={styles.photoCategory}
          source={{ uri: item.photo_url_main }}
        />
        <Text style={styles.titleCategory}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderDirection = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.containerDirection}>
        <View style={styles.containerTextDirection}>
          <Text style={styles.nameDirection}>{item.name}</Text>
          <Text style={styles.titleDirection}>{item.direction}</Text>
        </View>

        <View style={stylesTemplate.checkbox}>
          <RoundCheckbox
            size={22}
            borderColor={"#FF7F50"}
            backgroundColor={"#FF7F50"}
            iconColor={"#ffffff"}
            checked={item.isChecked}
            onValueChange={() => {
              handleChange(item.id, item.nameShort);
            }}
          />
        </View>
      </View>
      <View style={styles.lineSeparator}></View>
    </TouchableOpacity>
  );

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={stylesTemplate.containerSearch}>
        <Modal
          style={styles.bottomModalView}
          isVisible={isModalVisible}
          backdropOpacity={0}
          onBackdropPress={toggleModal}
        >
          <View style={styles.modal}>
            <TouchableOpacity
              style={{ alignSelf: "flex-start" }}
              onPress={hideModal}
            >
              <Icon
                type="ionicon"
                name={Platform.OS === "ios" ? "ios-close" : "md-close"}
                color="#FF7F50"
                size={28}
                style={styles.iconCloseModal}
              />
            </TouchableOpacity>
            <View>
              <Image
                style={styles.imageBanner}
                source={{
                  uri:
                    "https://sanfranciscodekkerlab.com/dekkershop/banner-home-3.png",
                }}
              />
            </View>
          </View>
        </Modal>
        <Modal
          style={styles.bottomModalView}
          isVisible={isModalVisibleDirection}
          backdropOpacity={0}
          onBackdropPress={toggleModalDirection}
        >
          <View style={styles.modalDirection}>
            <TouchableOpacity
              style={{ alignSelf: "flex-start" }}
              onPress={toggleModalDirection}
            >
              <Icon
                type="ionicon"
                name={Platform.OS === "ios" ? "ios-close" : "md-close"}
                color="#FF7F50"
                style={styles.iconCloseModal}
              />
            </TouchableOpacity>
            <Text style={styles.titleModalDirection}>
              Selecciona una direccion
            </Text>
            <View>
              <FlatList
                style={styles.containerDirections}
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={dataDirections}
                renderItem={renderDirection}
                keyExtractor={(item) => `${item.id}`}
              />
            </View>
          </View>
        </Modal>
        <View style={styles.containerLocation}>
          <Text style={styles.textSend}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-location" : "md-location"}
              color="#EEF1F8"
              size={30}
            />
            Enviar a
            <TouchableOpacity onPress={toggleModalDirection}>
              <Text style={styles.textLocation}>
                {direction}
                <Icon
                  type="ionicon"
                  style={styles.iconLocation}
                  name={
                    Platform.OS === "ios"
                      ? "ios-chevron-down-outline"
                      : "md-chevron-down-outline"
                  }
                  color="#EEF1F8"
                  size={15}
                />
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Carousel
              ref={slider1Ref}
              data={banners}
              renderItem={renderImage}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={true}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={10000}
              onSnapToItem={(index) => setActiveSlide(0)}
              useScrollView={true}
            />
            <Pagination
              dotsLength={banners.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgb(0,54,174)"
              dotStyle={styles.paginationDot}
              inactiveDotColor="rgba(0,54,174,0.5)"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={slider1Ref.current}
              tappableDots={!!slider1Ref.current}
            />
          </View>
        </View>
        <View style={stylesTemplate.containerMainTitles}>
          <View style={stylesTemplate.containerTitles}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Categories");
              }}
            >
              <Text style={stylesTemplate.textTitles}>
                Categorias
                <Icon
                  type="ionicon"
                  style={stylesTemplate.iconTitles}
                  name={
                    Platform.OS === "ios"
                      ? "ios-chevron-forward"
                      : "md-chevron-forward"
                  }
                  color="#FF7F50"
                  size={15}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={styles.listCategoriesHorizontal}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={renderCategories}
          keyExtractor={(item) => `${item.categoryId}`}
        />
        <View style={stylesTemplate.containerMainTitles}>
          <View style={stylesTemplate.containerTitles}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Brands");
              }}
            >
              <Text style={stylesTemplate.textTitles}>
                Marcas
                <Icon
                  type="ionicon"
                  style={stylesTemplate.iconTitles}
                  name={
                    Platform.OS === "ios"
                      ? "ios-chevron-forward"
                      : "md-chevron-forward"
                  }
                  color="#FF7F50"
                  size={15}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={styles.listBrandsHorizontal}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={brands}
          renderItem={renderBrand}
          keyExtractor={(item) => `${item.id}`}
        />
        <View style={stylesTemplate.containerMainTitles}>
          <View style={stylesTemplate.containerTitles}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Products");
              }}
            >
              <Text style={stylesTemplate.textTitles}>
                Nuestros productos
                <Icon
                  type="ionicon"
                  style={stylesTemplate.iconTitles}
                  name={
                    Platform.OS === "ios"
                      ? "ios-chevron-forward"
                      : "md-chevron-forward"
                  }
                  color="#FF7F50"
                  size={15}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={styles.listProductsVertical}
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          renderItem={renderProducts}
          keyExtractor={(item) => `${item.productId}`}
        />
        <View style={stylesTemplate.containerMainTitles}>
          <View style={stylesTemplate.containerTitles}>
            <TouchableOpacity>
              <Text style={stylesTemplate.textTitles}>Ahorro en Grande</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={styles.listProductsHorizontal}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={renderProductsSm}
          keyExtractor={(item) => `${item.productId}`}
        />
        <View style={stylesTemplate.containerMainTitles}>
          <View style={stylesTemplate.containerTitles}>
            <TouchableOpacity>
              <Text style={stylesTemplate.textTitles}>Mas Vendido</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={styles.listProductsHorizontal}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={renderProductsSm}
          keyExtractor={(item) => `${item.productId}`}
        />
      </ScrollView>
    </View>
  );
}
