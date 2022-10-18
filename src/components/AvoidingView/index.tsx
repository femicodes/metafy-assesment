import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

const AvoidingView = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default AvoidingView;
