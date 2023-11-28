import { useMemo } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "../../components";
import { styles } from "./styles";
import { inputs } from "./inputs";

export const Register = ({ type = "ADMIN" }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log("daaata", data);

  const renderInputs = useMemo(() =>
    inputs[type].map((input, index) => (
      <Controller
        key={index}
        name={input.name}
        control={control}
        rules={input.rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label={input.label}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry={input.type === "password"}
          />
        )}
      />
    ))
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/icon.png")}
          />
        </View>
        <View style={{ marginBottom: 50 }}>
          <Text style={styles.title}>Registrar (admin)</Text>
          {type === "ADMIN" && (
            <Text>
              Bem vindo :) Para começar crie uma conta que será responsável por
              gerenciar os colaboradores e as demais informações da empresa.
            </Text>
          )}
          {type === "COMPANY" && (
            <Text>Agora preencha as informações da empresa</Text>
          )}
          {type === "WORKER" && (
            <Text>Preencha os dados do colaborador abaixo</Text>
          )}
          {renderInputs}
        </View>
        <Button
          title="Registrar"
          onPress={handleSubmit(onSubmit)}
          style={{ width: 300 }}
        />
      </View>
    </ScrollView>
  );
};
