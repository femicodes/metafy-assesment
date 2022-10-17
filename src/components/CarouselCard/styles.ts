import { StyleSheet } from "react-native";
import { Colors, Typography } from "src/style";

const styles = StyleSheet.create({
  heroImage: {
    width: "100%",
    height: 406,
    resizeMode: "stretch",
  },
  jumboInfoContainer: {
    marginHorizontal: 20,
  },
  counterPill: {
    height: 26,
    backgroundColor: Colors.DARK_GREY,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 11,
  },
  counterPillText: {
    color: Colors.WHITE,
    fontFamily: Typography.fontFamily.SuisseMedium,
    lineHeight: 18,
    fontSize: 12,
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
  },
  subHeadingText: {
    marginTop: 8,
    maxWidth: 279,
    color: Colors.LIGHT_GREY,
    fontFamily: Typography.fontFamily.SussieRegular,
  },
});

export default styles;
