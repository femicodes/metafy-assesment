import { StyleSheet, Platform } from "react-native";
import { Colors, Typography } from "src/style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  dotContainer: {
    marginTop: 24,
    flexDirection: "row",
    marginLeft: 20,
  },
  carouselDot: {
    width: 7,
    height: 7,
    backgroundColor: Colors.DARK_GREY,
    borderRadius: 7 / 2,
    marginRight: 8,
  },
  activeDot: {
    backgroundColor: Colors.WHITE,
  },
  buttonContainer: {
    marginTop: 56,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  loginButton: {
    marginTop: 16,
  },
  jumboInfoContainer: {
    marginHorizontal: 20,
  },
  counterPill: {
    backgroundColor: Colors.DARK_GREY,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 11,
    minHeight: 26,
  },
  counterPillText: {
    color: Colors.WHITE,
    fontFamily: Typography.fontFamily.SuisseMedium,
    fontSize: 12,
    top: Platform.OS === "android" ? 1 : 0,
  },
  midPillText: {
    fontFamily: Typography.fontFamily.SussieRegular,
  },
  headingContainer: {
    marginTop: 20,
  },
  headingText: {
    color: Colors.WHITE,
    fontFamily: Typography.fontFamily.RoslindaleMedium,
    fontSize: 32,
    lineHeight: 39,
  },
  subHeadingText: {
    marginTop: 8,
    maxWidth: 279,
    color: Colors.LIGHT_GREY,
    fontFamily: Typography.fontFamily.SussieRegular,
    lineHeight: 21,
  },
});

export default styles;
