import React, {useState} from "react";
import { Text, View, Button, TextInput, ScrollView } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';
import { styles } from "./styles";

export const PointHistory = ({ navigation }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");
  const [historyData, setHistoryData] = useState([]);

  const handleSearch = () => {
    // lógica de busca
    const exampleData = [
      {
        date: "10/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
      {
        date: "11/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
      {
        date: "12/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
      {
        date: "13/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
      {
        date: "14/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
      {
        date: "15/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
      {
        date: "16/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
      {
        date: "17/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
      {
        date: "18/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
      {
        date: "19/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
      {
        date: "20/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
      {
        date: "21/11/2023",
        hours: [
          { start: "08:00", end: "12:00" },
          { start: "13:00", end: "17:00" },
        ],
      },
    ];

    setHistoryData(exampleData);
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
