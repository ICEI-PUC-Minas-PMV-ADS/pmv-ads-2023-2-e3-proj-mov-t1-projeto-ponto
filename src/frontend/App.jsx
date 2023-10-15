import { StatusBar, View, Text } from "react-native";
import { Login, WorkerProfile, PointHistory } from "../frontend/views";
import { PasswordRegister } from "./views/PasswordRegister/PasswordRegister";

export default function App() {
  return (
    <View>
      {/* <Text>Teste do app</Text> */}
      {/* <WorkerProfile /> */}
      <PasswordRegister />
    </View>
  );
}
