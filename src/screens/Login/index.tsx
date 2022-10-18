import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import AvoidingView from "src/components/AvoidingView";
import Header from "src/components/Header";
import Input from "src/components/Input";
import SocialIcon from "src/components/SocialIcon";
import Button from "src/components/Button";
import styles from "./styles";

const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <AvoidingView>
        <ScrollView bounces={false}>
          <Header title='Login' />
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
            <Input placeholder='Email' keyboardType='email-address' />
            <Input placeholder='Password' secureTextEntry={true} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
            activeOpacity={0.7}
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            style={styles.forgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Button title='Login' />
          </View>
        </ScrollView>
      </AvoidingView>
    </View>
  );
};

export default Login;
