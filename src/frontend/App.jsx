import { StatusBar, View, Text } from "react-native";
import { Login, WorkerProfile, PointHistory, PasswordRegister } from "../frontend/views";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAdmim, setIsAdmim] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAdmim ? "RegisterWorker" : "Login"}>
        <View>
          <Stack.Screen name="Login" component={Login}/> 
          <Stack.Screen name="PasswordRegister" component={PasswordRegister} />
          <Stack.Screen name="PointHistory" component={PointHistory} /> 
          <Stack.Screen name="WorkerProfile" component={WorkerProfile} /> 
          <Stack.Screen name="RegisterWorker" component={RegisterWorker} />
        </View>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
