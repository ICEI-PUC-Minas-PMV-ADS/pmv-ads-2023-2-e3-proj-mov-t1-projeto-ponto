import { useMemo, useReducer } from "react";
import {
  Login,
  WorkerProfile,
  PointHistory,
  Register,
  PasswordRegister,
} from "../frontend/views";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { authReducer } from "./reducers";
import { AuthContext } from "./context";

const DEFAULT_AUTH_OBJECT = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [authState, dispatch] = useReducer(authReducer, DEFAULT_AUTH_OBJECT);

  const authContext = useMemo(() => ({
    signIn: async (data) => {
      dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
    },
    signOut: () => dispatch({ type: "SIGN_OUT" }),
    signUp: async (data) => {
      dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
    },
  }));

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {authState.userToken === null ? (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen
                name="PasswordRegister"
                component={PasswordRegister}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="PointHistory" component={PointHistory} />
              <Stack.Screen name="WorkerProfile" component={WorkerProfile} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
