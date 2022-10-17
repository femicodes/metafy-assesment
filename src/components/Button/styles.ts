import { StyleSheet } from "react-native";
import { Colors, Typography } from "src/style";

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: Colors.YELLOW,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: Colors.BLACK,
    fontFamily: Typography.fontFamily.SuisseMedium,
    fontSize: 14,
  },
});

export default styles;
