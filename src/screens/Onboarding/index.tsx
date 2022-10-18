import React, { useRef, useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import Button from "src/components/Button";
import CarouselCard from "src/components/CarouselCard";
import { onboardingData } from "src/data";
import styles from "./styles";

const Onboarding = ({ navigation }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<any>(null);
  const { width } = Dimensions.get("window");

  const renderCarouselContainer = ({ item }: any) => {
    return (
      <View>
        <CarouselCard cardData={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Carousel
          ref={sliderRef}
          data={onboardingData}
          sliderWidth={width}
          itemWidth={width}
          renderItem={renderCarouselContainer}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        <View style={styles.dotContainer}>
          {onboardingData.map((_, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.carouselDot,
                  index === activeIndex && styles.activeDot,
                ]}
              />
            );
          })}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate("Signup")}
            title='Sign up'
          />
          <View style={styles.loginButton}>
            <Button title='Login' theme='alternate' />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Onboarding;
