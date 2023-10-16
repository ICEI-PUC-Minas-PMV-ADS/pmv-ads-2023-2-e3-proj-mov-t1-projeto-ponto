import { StatusBar, View, Text } from "react-native";
import { Login, WorkerProfile, PointHistory } from "../frontend/views";
import { PasswordRegister } from "./views/PasswordRegister/PasswordRegister";
import { RegisterWorker } from "./views/RegisterWorker/RegisterWorker";

export default function App() {
  return (
    <View>
      {/* <Text>Teste do app</Text> */}
      {/* <WorkerProfile /> */}
      {/* <RegisterWorker /> */}
      <PasswordRegister />
    </View>
  );
}
