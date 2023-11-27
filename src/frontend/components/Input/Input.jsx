import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";

export const Input = ({ label, onChange, onChangeText, ...rest }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput onChangeText={onChangeText} style={styles.input} {...rest} />
    </View>
  );
};
