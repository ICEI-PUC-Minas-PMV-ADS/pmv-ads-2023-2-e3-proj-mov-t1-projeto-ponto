import { useEffect, useState } from "react";
import { View, Text, Image, Button, TextInput, ScrollView } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';
import { DayPointsHistory } from "../../components";
import { styles } from "./styles";

export const WorkerProfile = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [OutWork, setOutWork] = useState(true);
  const [pointTake, setPointTake] = useState(Date);
  const [pointEnd, setPointEnd] = useState(Date);
  const [extraHour, setExtraHour] = useState(Date);
  const [justifyFault, setJustifyFault] = useState("");

  const startWork = () => {
    setPointTake(currentDate);
    setOutWork(false);
  };
  const finishWork = () => {
    setPointEnd(currentDate);
    setOutWork(true);
  };

  const faultJustify = () => {};

  useEffect(() => {
    setInterval(() => {
      let hours = new Date().getHours();
      hours < 10 && (hours = `0${hours}`);

      let min = new Date().getMinutes();
      min < 10 && (min = `0${min}`);

      let sec = new Date().getSeconds();
      sec < 10 && (sec = `0${sec}`);

      setCurrentDate(`${hours}:${min}:${sec}`);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.workerpic}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={{ fontSize: 30, color: "white" }}>Worker Name</Text>
        <Text style={{ fontSize: 20, color: "white" }}>worker@email.com</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.content}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
            {currentDate}
          </Text>
          {OutWork ? (
            <Button title="Bater ponto" color={"#1A2C26"} onPress={startWork} />
          ) : (
            <Button
              title="Finalizar Ponto"
              color={"red"}
              onPress={finishWork}
            />
          )}
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Total horas extras
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{extraHour}</Text>
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, borderBottomWidth: 1 }}>
          <Text
            style={{
              textAlign: "center",
              borderBottomWidth: 1,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Pontos do dia
          </Text>
          <ScrollView>
            <DayPointsHistory />
          </ScrollView>
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="digite o motivo da sua falta aqui."
            onChangeText={(text) => setJustifyFault(text)}
            value={justifyFault}
          />
          <Button
            title="Justificar falta"
            color={"red"}
            onPress={faultJustify}
          />
        </View>
      </View>
      <View style={styles.pageChange}>
        <View style={styles.pageChangeCotent}>
            <Icon name="engineering" style={styles.iconsPages} size={50} color={'gray'}/>
            <Icon name="date-range" onPress={() => navigation.navigate('PointHistory')} style={styles.iconsPages} size={50}/>
        </View>
      </View>
    </View>
  );
};
