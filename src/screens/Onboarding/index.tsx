import React, { useRef, useState } from "react";
import { View, ScrollView, Dimensions, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import GestureRecognizer from "react-native-swipe-gestures";
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

  const currentOnboardingData = onboardingData[activeIndex];

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
        <GestureRecognizer
          onSwipeRight={() => sliderRef.current.snapToPrev()}
          onSwipeLeft={() => sliderRef.current.snapToNext()}
        >
          <View style={styles.jumboInfoContainer}>
            <View style={styles.counterPill}>
              <Text style={styles.counterPillText}>
                {currentOnboardingData.stage}{" "}
                <Text style={styles.midPillText}>of</Text> 3
              </Text>
            </View>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>
                {currentOnboardingData.heading}
              </Text>
            </View>
            <View>
              <Text style={styles.subHeadingText}>
                {currentOnboardingData.subHeading}
              </Text>
            </View>
          </View>
        </GestureRecognizer>
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
            <Button
              onPress={() => navigation.navigate("Login")}
              title='Login'
              theme='alternate'
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Onboarding;
