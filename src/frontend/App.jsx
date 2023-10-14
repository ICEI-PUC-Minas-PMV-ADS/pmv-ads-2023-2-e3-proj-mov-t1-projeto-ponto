import { StatusBar, View, Text } from "react-native";
import { Login, WorkerProfile, PointHistory } from "../frontend/views";

export default function App() {
  return (
    <View>
      <PointHistory />
      {/* <Text>Teste do app</Text> */}
      {/* <WorkerProfile /> */}
    </View>
  );
}
