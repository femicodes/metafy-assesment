import { StyleSheet } from "react-native";
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
});

export default styles;
