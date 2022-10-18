import { StyleSheet } from "react-native";
import { Colors, Typography } from "src/style";

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 284,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  backButton: {
    width: 32,
    height: 32,
  },
  headerContainer: {
    marginTop: 56,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 134,
    height: 40,
  },
  boxContainer: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    marginTop: 68,
    marginHorizontal: 20,
  },
  titleText: {
    color: Colors.WHITE,
    fontFamily: Typography.fontFamily.RoslindaleMedium,
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: 0.5,
  },
});

export default styles;
