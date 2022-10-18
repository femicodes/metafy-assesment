import { StyleSheet } from "react-native";
import { Colors } from "src/style";

const styles = StyleSheet.create({
  socialsButton: {
    backgroundColor: Colors.BLACK_SHADE_2,
    alignSelf: "flex-start",
    minWidth: 57,
    height: 48,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    flexGrow: 1,
  },
  removeMargin: {
    marginRight: 0,
  },
});

export default styles;
