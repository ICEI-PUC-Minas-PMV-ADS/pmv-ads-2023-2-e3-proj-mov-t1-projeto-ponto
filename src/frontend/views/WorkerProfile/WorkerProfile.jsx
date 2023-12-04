import { useEffect, useState } from "react";
import { View, Text, Button, TextInput, ScrollView } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';
import { styles } from "./styles";
import moment from "moment/moment";
import { PointServices } from "../../services/point/pointServices";

export const WorkerProfile = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [OutWork, setOutWork] = useState(true);
  const [pointTake, setPointTake] = useState("");
  const [pointEnd, setPointEnd] = useState("");
  const [extraHour, setExtraHour] = useState(0);
  const [justifyFault, setJustifyFault] = useState("");

  const startWork = () => {
    setPointTake(new Date());
    setOutWork(false);
  };
  const finishWork = () => {
    setPointEnd(new Date());
    setOutWork(true);
    extraHourCal()
    registerPoint()
  };
  
  const registerPoint = async () => {
    try {
      await PointServices.registerPoint({end: pointEnd, start: pointTake})
    } catch (error) {
      console.log(error);
    }
  }
  
  const extraHourCal = () => {
    const hour = 8 * 60 * 60 * 1000;
    const point = pointEnd - pointTake;
    if (point > hour) {
      setExtraHour((extraHour + (point - hour)))
      console.log(extraHour, "extra");
    }
  }


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
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{moment(extraHour).format("HH:MM")}</Text>
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
            <Icon name="engineering" style={styles.iconsPages} size={30} color={'white'}/>
            <Icon name="date-range" onPress={() => navigation.navigate('PointHistory')} style={styles.iconsPages} size={30}/>
        </View>
      </View>
    </View>
  );
};
