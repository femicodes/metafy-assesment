import { StyleSheet } from "react-native";
import { Colors, Typography } from "src/style";

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.BLACK_SHADE_2,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "transparent",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontFamily: Typography.fontFamily.SuisseMedium,
    fontSize: 16,
    color: Colors.WHITE,
  },
  onBlur: {
    borderColor: Colors.BLACK_SHADE_3,
    backgroundColor: Colors.BLACK_SHADE_4,
  },
});

export default styles;
