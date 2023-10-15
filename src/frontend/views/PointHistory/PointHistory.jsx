import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { styles } from "./styles";

export const PointHistory = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>Histórico de Ponto</Text>
      <Text>Período de Busca</Text>
      <View style={styles.dateInputContainer}>
        <TextInput
        style={styles.dateInput}
        placeholder= "DD/MM/AAAA"
        />
        <Text style={styles.dateInput}>à</Text>
        <TextInput
        style={styles.dateInput}
        placeholder= "DD/MM/AAAA"
        />
      </View>
      <Text>Nome do Colaborador</Text>
      <View style={styles.searchBar}>
        <TextInput
        style={styles.nameInput}
        placeholder="Nome"
        />
        <Button title="Buscar" color={"green"} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
