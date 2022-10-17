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
      <View>
        <Image style={styles.heroImage} source={cardData.backgroundUrl} />
      </View>
      <View style={styles.jumboInfoContainer}>
        <View style={styles.counterPill}>
          <Text style={styles.counterPillText}>
            {cardData.stage} <Text style={styles.midPillText}>of</Text> 3
          </Text>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{cardData.heading}</Text>
        </View>
        <View>
          <Text style={styles.subHeadingText}>{cardData.subHeading}</Text>
        </View>
      </View>
    </View>
  );
};

export default CarouselCard;
