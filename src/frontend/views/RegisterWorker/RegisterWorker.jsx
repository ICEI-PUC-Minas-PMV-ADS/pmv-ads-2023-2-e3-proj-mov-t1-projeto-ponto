import { SafeAreaView, Text, View, Image } from "react-native";
import { Button, Input } from "../../components";
import { styles } from "./styles";
import { COLORS } from "../../constants";

export const RegisterWorker = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
      </View>
      <View style={{ marginBottom: 50 }}>
        <Text style={styles.title}>Registrar (admin)</Text>
      </View>
      <Input label="Nome completo" style={{ marginBottom: 25 }} name />
      <Input label="Email" style={{ marginBottom: 25 }} email/>
      <Input label="Cargo" style={{ marginBottom: 25 }} name/>
      <Input label="Senha" style={{ marginBottom: 25 }} password />
      <Input label="Repita sua senha" style={{ marginBottom: 25 }} password />
      <View style={{ width: "100%" }}>
        <Button
          title="Registrar"
          onPress={() => console.log("teste")}
          style={{ width: 300 }}
        />
      </View>
    </SafeAreaView>
  );
};
