import { useState } from "react";
import {
  Login,
  WorkerProfile,
  PointHistory,
  Register,
  PasswordRegister,
} from "../frontend/views";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAdmin ? "Register" : "Login"}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PasswordRegister" component={PasswordRegister} />
        <Stack.Screen name="PointHistory" component={PointHistory} />
        <Stack.Screen name="WorkerProfile" component={WorkerProfile} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
    // <WorkerProfile/>
  );
}
