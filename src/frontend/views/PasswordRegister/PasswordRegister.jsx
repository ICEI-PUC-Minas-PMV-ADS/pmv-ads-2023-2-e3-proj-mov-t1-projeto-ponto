import { SafeAreaView, Text, View, Image } from "react-native";
import { Button, Input } from "../../components";
import { styles } from "./styles";
import { COLORS } from "../../constants";

export const PasswordRegister = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
      </View>
      <View style={{ marginBottom: 50 }}>
        <Text style={styles.title}>Defina uma senha</Text>
        <Text style={{ color: COLORS.fontGrey, fontSize: 16 }}>
          Bem vindo ao ponto !
        </Text>
        <Text style={{ color: COLORS.fontGrey, fontSize: 16 }}>
          O seu controle sem complicações
        </Text>
      </View>
      <Input label="Senha" style={{ marginBottom: 25 }} password />
      <Input label="Repita sua senha" style={{ marginBottom: 25 }} password />
      <View style={{ width: "100%" }}>
        <Button
          title="Definir senha"
          onPress={() => console.log("teste")}
          style={{ width: 300 }}
        />
      </View>
    </SafeAreaView>
  );
};
