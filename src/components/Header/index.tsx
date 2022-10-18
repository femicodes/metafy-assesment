import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

interface Props {
  title?: string;
}

const Header = ({ title }: Props) => {
  return (
    <View>
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.backgroundImage}
          resizeMode='stretch'
          source={require("src/assets/images/pattern.png")}
        />
      </View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
          activeOpacity={0.7}
        >
          <Image
            style={styles.backButton}
            source={require("src/assets/images/back-button.png")}
          />
        </TouchableOpacity>
        <View>
          <Image
            resizeMode='contain'
            style={styles.logo}
            source={require("src/assets/images/logo.png")}
          />
        </View>
        <View style={styles.boxContainer} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
