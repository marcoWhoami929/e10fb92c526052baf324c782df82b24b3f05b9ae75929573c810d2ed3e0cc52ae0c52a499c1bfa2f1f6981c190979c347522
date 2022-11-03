import React, { useLayoutEffect, useRef, useState, useContext } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./styles";
import stylesTemplate from "../templateStyles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  getCategoryName,
  getBrandName,
  getBrandById,
} from "../../data/MockDataAPI";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import ViewCategoriesButton from "../../components/ViewCategoriesButton/ViewCategoriesButton";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import { Icon } from "react-native-elements";
import Accordion from "react-native-collapsible-accordion";
import { AntDesign } from "@expo/vector-icons";
import ButtonShopDetail from "../../components/ButtonShop/ButtonShopDetail";
import ButtonWishListDetail from "../../components/ButtonWishList/ButtonWishListDetail";
import ButtonShop from "../../components/ButtonShop/ButtonShop";
import ButtonWishList from "../../components/ButtonWishList/ButtonWishList";
/**CART CONTEXT */
import { getProduct, products } from "../../data/dataArrays";
import { CartContext } from "../../Context/CartContext.js";
/**CART CONTEXT */

const { width: viewportWidth } = Dimensions.get("window");

export default function ProductScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.item;
  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(1);

  const brand = getBrandById(item.brandId);
  const title = getBrandName(brand.id);

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();

  const { addItemToCart, addItemToFavorites } = useContext(CartContext);

  useLayoutEffect(() => {
    setProduct(getProduct(item.productId)),
      navigation.setOptions({
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
          <HeaderIconsRight
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      });
  }, []);

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  const onAddToCart = () => {
    addItemToCart(product.productId, counter);
  };
  const onAddToFavorites = () => {
    addItemToFavorites(product.productId);
  };
  const onPressCategory = (item) => {
    var name = getCategoryName(item);
    let category = item;
    navigation.navigate("Category", { category, name });
  };
  /**FUNCTIONS COUNTER */
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const reduceCounter = () => {
    setCounter(counter - 1);
  };
  /**FUNCTIONS COUNTER */

  const [showMoreInfo, setShowMoreInfo] = useState(false);

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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.infoProductContainerMain}>
          <Text style={styles.infoProductName}>{item.title}</Text>
        </View>
        <View style={styles.carousel}>
          <Carousel
            ref={slider1Ref}
            data={item.photosArray}
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={true}
            autoplayDelay={500}
            autoplayInterval={10000}
            onSnapToItem={(index) => setActiveSlide(0)}
          />
          <Pagination
            dotsLength={item.photosArray.length}
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

      <View style={styles.infoProductContainer}>
        <View style={styles.infoContainerPrice}>
          <View style={styles.detailPrice}>
            <Text style={styles.infoProductPriceDiscount}>
              $ {item.priceDiscount.toFixed(2)}
              {item.discount == 0 ? (
                <Text style={styles.infoProductPrice}></Text>
              ) : (
                <Text style={styles.infoProductPrice}>
                  ${item.price.toFixed(2)}
                </Text>
              )}
            </Text>
            <Text style={styles.infoProductMsg}>MXN(IVA inclu.)</Text>
          </View>
          <View style={styles.detailBrand}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-cube" : "md-cube"}
              color="#0036AE"
              size={25}
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductsList", { brand, title })
              }
            >
              <Text style={styles.infoProduct}>
                {getBrandName(item.brandId).toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoContainerDetail}>
          <View style={styles.detail}>
            <Text style={styles.headerDetail}>Código</Text>
            <Text style={styles.infoDetail}>{item.code}</Text>
          </View>
          <View style={styles.detailCenter}>
            <Text style={styles.headerDetail}>Unidad</Text>

            <Text style={styles.infoDetail}>{item.unid}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.headerDetail}>Existencias</Text>

            <Text style={styles.infoDetail}>{item.stock}</Text>
          </View>
        </View>
        <View style={styles.containerCollapse}>
          <Accordion
            onChangeVisibility={(value) => {
              setShowMoreInfo(value);
            }}
            renderHeader={() => (
              <View style={styles.wrapDropDownHeader}>
                <Text style={styles.moreInfoText}>Descripción de Producto</Text>
                <AntDesign
                  style={styles.dropIcon}
                  name={!showMoreInfo ? "down" : "up"}
                />
                <ViewCategoriesButton
                  onPress={() => {
                    let categories = item.categories;
                    categories.map((category) => {
                      onPressCategory(category[0]);
                    });
                  }}
                />
              </View>
            )}
            renderContent={() => (
              <View style={styles.wrapDropContent}>
                <Text style={styles.infoDescriptionProduct}>
                  {item.description}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={styles.infoContainerDetail}>
          <View style={styles.detailSection}>
            <View style={styles.operatingBox}>
              <TouchableOpacity
                activeOpacity={0.2}
                style={styles.reduce}
                onPress={reduceCounter}
              >
                <Text allowFontScaling={false} style={styles.btn1}>
                  -
                </Text>
              </TouchableOpacity>

              <View style={styles.inputBox}>
                <Text style={styles.inputValue}>{counter}</Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.2}
                style={styles.plus}
                onPress={increaseCounter}
              >
                <Text allowFontScaling={false} style={styles.btn1}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailSection}>
            <ButtonShopDetail onPress={onAddToCart} />
          </View>
          <View style={styles.detailSectionFavorites}>
            <ButtonWishListDetail onPress={onAddToFavorites} />
          </View>
        </View>
        <View style={stylesTemplate.containerMainTitlesproduct}>
          <View style={stylesTemplate.containerTitles}>
            <TouchableOpacity>
              <Text style={stylesTemplate.textTitles}>Te puede interesar</Text>
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
      </View>
    </ScrollView>
  );
}
