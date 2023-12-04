import React, {useState} from "react";
import { Text, View, Button, TextInput, ScrollView } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';
import { styles } from "./styles";

export const PointHistory = ({ navigation }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");
  const [historyData, setHistoryData] = useState([]);

  const handleSearch = async () => {
    // lógica de busca

    try {
      const response = await fetch('http://localhost:3000/points');
      const data = await response.json();

      const filteredData = data.filter(item => (
        item.date >= startDate && item.date <= endDate &&
        item.hours.some(hour => hour.start.includes(name) || hour.end.includes(name))
      ));

      setHistoryData(filteredData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const renderHistory = () => {
    return historyData.map((dayData, index) => (
      <View key = {index}>
        <View>
          <Text style={styles.dayLabel}>{dayData.date}</Text>
        </View>
        <View>
          {dayData.hours.map((hour, hourIndex) => (
            <Text key={hourIndex} style={styles.hourRegisted}>
              {`${hour.start} > ${hour.end}`}
            </Text>
          ))}
        </View>
      </View>
    ))
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Histórico de Ponto</Text>
        <Text>Período de Busca</Text>
        <View style={styles.dateInputContainer}>
          <TextInput
          style={styles.dateInput}
          placeholder= "DD/MM/AAAA"
          onChangeText={(text) => setStartDate(text)}
          />
          <Text style={styles.dateInput}>à</Text>
          <TextInput
          style={styles.dateInput}
          placeholder= "DD/MM/AAAA"
          onChangeText={(text) => setEndDate(text)}
          />
        </View>
        <Text>Nome do Colaborador</Text>
        <View style={styles.searchBar}>
          <TextInput
          style={styles.nameInput}
          placeholder="Nome"
          onChangeText={(text) => setName(text)}
          />
          <Button title="Buscar" color={"green"} onPress={handleSearch} />
        </View>
      </View>
      <View style={styles.history}>
        <ScrollView>
        {renderHistory()}
        </ScrollView>
      </View>
      <View style={styles.pageChange}>
        <View style={styles.pageChangeCotent}>
          <Icon name="engineering" onPress={() => navigation.navigate('WorkerProfile')} size={30}/>
          <Icon name="date-range" size={30} color={'white'}/>
        </View>
      </View>
    </View>
  );
};
