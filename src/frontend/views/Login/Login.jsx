import { SafeAreaView, Text, View, Image } from "react-native";
import { Link } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "../../components";
import { styles } from "./styles";
import { COLORS } from "../../constants";

export const Login = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log("data", data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
      </View>
      <View style={{ marginBottom: 50 }}>
        <Text style={styles.title}>Login</Text>
        <Text style={{ color: COLORS.fontGrey, fontSize: 16 }}>Bem-vindo!</Text>
      </View>
      <Controller
        control={control}
        name="email"
        rules={{ required: "Campo obrigatório" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Email"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={{ marginBottom: 25 }}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: "Campo obrigatório" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Senha"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={{ marginBottom: 25 }}
            secureTextEntry
          />
        )}
      />
      <Link to={{ screen: "Register" }}>Cadastre-se</Link>
      <View style={{ width: "100%" }}>
        <Button
          title="Entrar"
          onPress={handleSubmit(onSubmit)}
          style={{ width: 300 }}
        />
      </View>
    </SafeAreaView>
  );
};
