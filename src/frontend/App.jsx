import { StatusBar, View, Text } from "react-native";
import { Login, WorkerProfile, PointHistory } from "../frontend/views";
import { PasswordRegister } from "./views/PasswordRegister/PasswordRegister";
import { RegisterWorker } from "./views/RegisterWorker/RegisterWorker";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAdmim, setIsAdmim] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <View>
          {/* <Text>Teste do app</Text> */}
          {/* <WorkerProfile /> */}
          {/* <RegisterWorker /> */}
          {/* <PasswordRegister /> */}
          <Stack.Screen name="RegisterWorker" component={RegisterWorker} />
        </View>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
