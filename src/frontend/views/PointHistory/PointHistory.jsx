import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const PointHistory = () => {
  return (
    <View style={styles.container}>
      <Text>Histórico de Ponto</Text>
      <StatusBar style="auto" />
    </View>
  );
};
