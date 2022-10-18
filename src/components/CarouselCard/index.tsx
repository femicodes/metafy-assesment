import React from "react";
import { View, Text, Image } from "react-native";
import { OnboardingData } from "src/types";
import styles from "./styles";

interface Props {
  cardData: OnboardingData;
}

const CarouselCard = ({ cardData }: Props) => {
  return (
    <View>
      <Image style={styles.heroImage} source={cardData.backgroundUrl} />
    </View>
  );
};

export default CarouselCard;
