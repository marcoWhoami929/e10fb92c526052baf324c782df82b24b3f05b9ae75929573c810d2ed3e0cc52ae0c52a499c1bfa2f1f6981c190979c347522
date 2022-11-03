import React, { useLayoutEffect, useState, useRef } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import styles from "./styles";
import BackButtonGeneral from "../../components/BackButton/BackButtonGeneral";
import HeaderIconsRight from "../../components/MenusNavigation/HeaderIconsRight";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { magazine } from "../../data/dataArrays";
const { width: viewportWidth } = Dimensions.get("window");
export default function PromotionsScreen(props) {
  const { navigation } = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const slider1Ref = useRef();

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
        <HeaderIconsRight
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
    });
  }, []);
  const renderImage = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: item.photo }} />
    </View>
  );

  return (
    <ScrollView style={styles.containerScroll}>
      <View>
        <Carousel
          ref={slider1Ref}
          data={magazine}
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
          dotsLength={magazine.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotColor="transparent"
          dotStyle={styles.paginationDot}
          inactiveDotColor="transparent"
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={slider1Ref.current}
          tappableDots={!!slider1Ref.current}
        />
      </View>
    </ScrollView>
  );
}
