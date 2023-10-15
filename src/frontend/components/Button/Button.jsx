import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export const Button = ({ title, onPress, ...rest }) => {
  const { style } = { ...rest };
  return (
    <Pressable onPress={onPress} style={{ ...styles.button, ...style }}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
