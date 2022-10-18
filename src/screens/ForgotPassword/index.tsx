import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import AvoidingView from "src/components/AvoidingView";
import Header from "src/components/Header";
import Input from "src/components/Input";
import Button from "src/components/Button";
import styles from "./styles";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <AvoidingView>
        <ScrollView bounces={false}>
          <Header title='Forgot your password?' />
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Input placeholder='Email' keyboardType='email-address' />
          </View>
          <View style={styles.buttonContainer}>
            <Button title='Send password reset email' />
          </View>
        </ScrollView>
      </AvoidingView>
    </View>
  );
};

export default ForgotPassword;
