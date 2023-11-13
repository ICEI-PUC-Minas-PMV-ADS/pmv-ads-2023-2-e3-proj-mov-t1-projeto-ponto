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
      <View>
        <View>
          <Text style={styles.dayLabel}>10/11/2023</Text>
        </View>
        <View>
          <Text style={styles.hourRegisted}>08:00 {'>'} 12:00  </Text>
          <Text style={styles.hourRegisted}>13:00 {'>'} 17:00  </Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.dayLabel}>09/11/2023</Text>
        </View>
        <View>
          <Text style={styles.hourRegisted}>08:00 {'>'} 12:00  </Text>
          <Text style={styles.hourRegisted}>13:00 {'>'} 17:00  </Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.dayLabel}>08/11/2023</Text>
        </View>
        <View>
          <Text style={styles.hourRegisted}>08:00 {'>'} 12:00  </Text>
          <Text style={styles.hourRegisted}>13:00 {'>'} 17:00  </Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.dayLabel}>07/11/2023</Text>
        </View>
        <View>
          <Text style={styles.hourRegisted}>08:00 {'>'} 12:00  </Text>
          <Text style={styles.hourRegisted}>13:00 {'>'} 17:00  </Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.dayLabel}>06/11/2023</Text>
        </View>
        <View>
          <Text style={styles.hourRegisted}>08:00 {'>'} 12:00  </Text>
          <Text style={styles.hourRegisted}>13:00 {'>'} 17:00  </Text>
        </View>
      </View>
    </View>
  );
};
