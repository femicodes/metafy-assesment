import React, { useState } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { Colors } from "src/style";
import styles from "./styles";

const Input = ({ placeholder, ...props }: TextInputProps) => {
  const [isBlur, setIsBlur] = useState(false);

  return (
    <View style={[styles.inputContainer, isBlur && styles.onBlur]}>
      <TextInput
        {...props}
        placeholderTextColor={Colors.LIGHT_GREY}
        placeholder={placeholder}
        style={styles.input}
        selectionColor={Colors.YELLOW}
        onBlur={() => setIsBlur(false)}
        onFocus={() => setIsBlur(true)}
      />
    </View>
  );
};

export default Input;
