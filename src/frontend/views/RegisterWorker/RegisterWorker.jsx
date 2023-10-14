import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UserServices } from "../../services/user/userServices";

export const RegisterWorker = () => {
  const [msgErrorRegister, setMsgErrorRegister] = useState("");

  const registerUser = async (e) => {
    try {
      e.preventDefault();
      await UserServices.registerUser();
    } catch (error) {
      setMsgErrorRegister(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Histórico de Ponto</Text>
      <StatusBar style="auto" />
    </View>
  );
};
