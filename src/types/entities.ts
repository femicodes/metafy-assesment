import { ImageSourcePropType } from "react-native";

export type OnboardingData = {
  heading: string;
  subHeading: string;
  backgroundUrl: ImageSourcePropType;
  stage: number;
};
