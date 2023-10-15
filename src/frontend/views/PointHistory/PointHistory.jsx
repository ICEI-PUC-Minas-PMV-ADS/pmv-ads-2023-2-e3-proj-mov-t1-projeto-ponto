import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { styles } from "./styles";

export const PointHistory = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>Histórico de Ponto</Text>
      <Text>Nome do Colaborador</Text>
      <View style={styles.dateInputContainer}>
        <TextInput
        style={styles.dateInput}
        placeholder= "Data Início"
        />
        <Text style={styles.dateInput}>à</Text>
        <TextInput
        style={styles.dateInput}
        placeholder= "Data Fim"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
