import { SafeAreaView, Text, View, Image } from "react-native";
import { Button, Input } from "../../components";
import { styles } from "./styles";
import { COLORS } from "../../constants";

export const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
      </View>
      <View style={{ marginBottom: 50 }}>
        <Text style={styles.title}>Login</Text>
        <Text style={{ color: COLORS.fontGrey, fontSize: 16 }}>Bem-vindo!</Text>
      </View>
      <Input label="Email" style={{ marginBottom: 25 }} password />
      <Input label="Senha" style={{ marginBottom: 25 }} password />
      <View style={{ width: "100%" }}>
        <Button
          title="Entrar"
          onPress={() => console.log("teste")}
          style={{ width: 300 }}
        />
      </View>
    </SafeAreaView>
  );
};
