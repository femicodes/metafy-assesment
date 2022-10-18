import { StyleSheet } from "react-native";
import { Colors, Typography } from "src/style";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  infoContainer: {
    marginTop: 16,
    marginHorizontal: 20,
  },
  infoText: {
    color: Colors.LIGHT_GREY,
    fontFamily: Typography.fontFamily.SuisseMedium,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  formContainer: {
    marginTop: 32,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
});

export default styles;
