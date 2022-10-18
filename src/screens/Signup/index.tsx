import React from "react";
import { View, Text, ScrollView } from "react-native";
import AvoidingView from "src/components/AvoidingView";
import Header from "src/components/Header";
import Input from "src/components/Input";
import SocialIcon from "src/components/SocialIcon";
import styles from "./styles";

const Signup = () => {
  return (
    <View style={styles.container}>
      <AvoidingView>
        <ScrollView bounces={false}>
          <Header title='Sign up' />
          <View style={styles.socialsContainer}>
            <SocialIcon name='twitch' />
            <SocialIcon name='discord' />
            <SocialIcon name='google' />
            <SocialIcon name='apple' />
            <SocialIcon name='facebook' removeMargin />
          </View>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <View>
              <Text style={styles.dividerText}>OR</Text>
            </View>
            <View style={styles.divider} />
          </View>
          <View style={styles.formSection}>
            <Input placeholder='Full name' />
            <Input placeholder='Email' keyboardType='email-address' />
            <Input placeholder='Password' secureTextEntry={true} />
          </View>
        </ScrollView>
      </AvoidingView>
    </View>
  );
};

export default Signup;
