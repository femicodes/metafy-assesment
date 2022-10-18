import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Colors } from "src/style";
import styles from "./styles";

interface Props {
  title: string;
  theme?: "alternate";
  onPress?: () => void;
}

const Button = ({ title, theme, onPress }: Props) => {
  const colorMap: any = {
    alternate: {
      backgroundColor: Colors.BLACK_SHADE_2,
      textColor: Colors.WHITE,
    },
  };

  const selectedColor = colorMap?.[theme as string];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        theme && { backgroundColor: selectedColor?.backgroundColor },
      ]}
      activeOpacity={0.8}
    >
      <Text
        style={[styles.titleText, theme && { color: selectedColor?.textColor }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
