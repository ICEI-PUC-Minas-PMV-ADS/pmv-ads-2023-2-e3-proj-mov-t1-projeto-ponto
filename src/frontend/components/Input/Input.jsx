import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";

export const Input = ({ label, onChange, password = false, ...rest }) => {
  return (
    <View {...rest}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChange={onChange}
        style={styles.input}
        secureTextEntry={password}
      />
    </View>
  );
};
