import { SafeAreaView, Text, View, Image } from "react-native";
import { Button, Input } from "../../components";
import { Controller, useForm } from "react-hook-form";
import { styles } from "./styles";
import { COLORS } from "../../constants";

export const PasswordRegister = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log("data", data);

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
      <Controller
        control={control}
        name="password"
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
      <Controller
        control={control}
        name="passwordConfirmation"
        rules={{ required: "Campo obrigatório" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Repita sua senha"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={{ marginBottom: 25 }}
            secureTextEntry
          />
        )}
      />
      <View style={{ width: "100%" }}>
        <Button
          title="Definir senha"
          onPress={handleSubmit(onSubmit)}
          style={{ width: 300 }}
        />
      </View>
    </SafeAreaView>
  );
};
