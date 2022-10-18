import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { Colors, Typography } from "src/style";
import styles from "./styles";

const Input = ({ placeholder, ...props }: TextInputProps) => {
  const inputRef = useRef<any>(null);
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    inputRef?.current?.setNativeProps({
      style: { fontFamily: Typography.fontFamily.SuisseMedium },
    });
  }, [props.secureTextEntry]);

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
