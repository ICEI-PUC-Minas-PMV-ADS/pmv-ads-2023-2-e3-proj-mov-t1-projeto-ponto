import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color: COLORS.green,
  },
  input: {
    borderBottomWidth: 2,
    height: 40,
    width: 300,
    borderColor: COLORS.lightGrey,
  },
});
