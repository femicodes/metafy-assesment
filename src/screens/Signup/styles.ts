import { StyleSheet } from "react-native";
import { Colors, Typography } from "src/style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  socialsContainer: {
    marginTop: 24,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  dividerContainer: {
    marginTop: 16,
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
  },
  divider: {
    height: 1,
    backgroundColor: Colors.BLACK_SHADE_3,
    flexGrow: 1,
  },
  dividerText: {
    color: Colors.LIGHT_GREY,
    marginHorizontal: 16,
    fontSize: 12,
    fontFamily: Typography.fontFamily.SuisseMedium,
  },
  formSection: {
    marginTop: 16,
    marginHorizontal: 20,
  },
  termsContainer: {
    marginTop: 4,
    marginHorizontal: 20,
  },
  termsText: {
    color: Colors.LIGHT_GREY,
    fontFamily: Typography.fontFamily.SussieRegular,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
  },
  highlightTerms: {
    color: Colors.WHITE,
    fontFamily: Typography.fontFamily.SuisseMedium,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 30,
  },
});

export default styles;
