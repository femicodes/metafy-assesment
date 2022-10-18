import React from "react";
import { TouchableOpacity, View } from "react-native";
import Header from "src/components/Header";
import SocialIcon from "src/components/SocialIcon";
import styles from "./styles";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Header title='Sign up' />
      <View style={styles.socialsContainer}>
        <SocialIcon name='twitch' />
        <SocialIcon name='discord' />
        <SocialIcon name='google' />
        <SocialIcon name='apple' />
        <SocialIcon name='facebook' removeMargin />
      </View>
    </View>
  );
};

export default Signup;
