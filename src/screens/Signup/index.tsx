import React from "react";
import { View } from "react-native";
import Header from "src/components/Header";
import styles from "./styles";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Header title='Sign up' />
    </View>
  );
};

export default Signup;
