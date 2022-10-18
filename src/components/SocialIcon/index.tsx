import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "src/components/Icon";
import styles from "./styles";

interface Props {
  name?: string;
  removeMargin?: boolean;
}

const SocialIcon = ({ name, removeMargin }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.socialsButton, removeMargin && styles.removeMargin]}
    >
      <Icon name={name as string} />
    </TouchableOpacity>
  );
};

export default SocialIcon;
