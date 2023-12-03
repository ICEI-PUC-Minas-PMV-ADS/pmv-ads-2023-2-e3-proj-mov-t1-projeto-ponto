import { useMemo, useReducer } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import md5 from "md5";
import {
  Login,
  PasswordRegister,
  PointHistory,
  Register,
  WorkerProfile,
} from "../views";
import { authReducer } from "../reducers";
import { AuthContext } from "../context";
import { userServices } from "../services/user/userServices";

const { Navigator, Screen } = createNativeStackNavigator();

const DEFAULT_AUTH_OBJECT = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export function AppRoutes() {
  const [authState, dispatch] = useReducer(authReducer, DEFAULT_AUTH_OBJECT);

  const authContext = useMemo(() => ({
    signIn: async (data) => {
      dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
    },
    signOut: () => dispatch({ type: "SIGN_OUT" }),
    signUp: async (userData) => {
      const userInfo = await userServices.registerUser(userData);
      const dummyToken = md5(userInfo);
      dispatch({ type: "SIGN_IN", userInfo, token: dummyToken });
    },
  }));

  const isSignedIn = authState.userToken;

  return (
    <AuthContext.Provider value={authContext}>
      <Navigator screenOptions={{ headerShown: false }}>
      {!isSignedIn ? (
          <>
            <Screen name="PointHistory" component={PointHistory} />
            <Screen name="WorkerProfile" component={WorkerProfile} />
          </>
        ) : (
          <>
            <Screen name="PointHistory" component={PointHistory} />
            <Screen name="WorkerProfile" component={WorkerProfile} />
          </>
        )}

        {/* {!isSignedIn ? (
          <>
            <Screen name="Login" component={Login} />
            <Screen name="PasswordRegister" component={PasswordRegister} />
          </>
        ) : (
          <>
            <Screen name="PointHistory" component={PointHistory} />
            <Screen name="WorkerProfile" component={WorkerProfile} />
          </>
        )} */}
        <Screen
          navigationKey={isSignedIn ? "user" : "guest"}
          name="Register"
          component={Register}
          initialParams={{ type: isSignedIn ? "COMPANY" : "ADMIN" }}
        />
      </Navigator>
    </AuthContext.Provider>
  );
}
