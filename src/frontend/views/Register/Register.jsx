import { SafeAreaView, Text, View, Image } from "react-native";
import { Button, Input } from "../../components";
import { styles } from "./styles";

const INPUTS = {
  ADMIN: [
    { label: "Nome completo", type: "name" },
    { label: "Email", type: "email" },
    { label: "Cargo", type: "name" },
    { label: "Senha", type: "password" },
    { label: "Repita sua senha", type: "password" },
  ],
  WORKER: [
    { label: "Nome completo", type: "name" },
    { label: "Email", type: "email" },
    { label: "Cargo", type: "name" },
    { label: "Senha", type: "password" },
    { label: "Repita sua senha", type: "password" },
  ],
};

export const Register = ({ type }) => {
  const renderInputs = () =>
    INPUTS[type].map((input) => {
      <Input label={input.label} name />;
    });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
      </View>
      <View style={{ marginBottom: 50 }}>
        <Text style={styles.title}>Registrar (admin)</Text>
        {renderInputs()}
      </View>
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
