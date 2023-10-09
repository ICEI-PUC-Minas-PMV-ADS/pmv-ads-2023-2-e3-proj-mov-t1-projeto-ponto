import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Button, TextInput, ScrollView } from 'react-native';
import DayPointsHistory from '../../components/dayPointsHistory/index'
import { BsClockHistory } from 'react-icons/bs'
import { SiMicrosoftpowerpoint } from 'react-icons/si'

export default function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [OutWork, setOutWork] = useState(true)
  const [pointTake, setPointTake] = useState(Date);
  const [pointEnd, setPointEnd] = useState(Date);
  const [justifyFault, setJustifyFault] = useState('');

  const startWork = () => {
    setPointTake(currentDate)
    setOutWork(false)
  } 
  const finishWork = () => {
    setPointEnd(currentDate)
    setOutWork(true)
  }

  const faultJustify = () => {
  }

  useEffect(() => {
    setInterval(
      () => {
        let hours = new Date().getHours();
        (hours < 10) && (hours = `0${hours}`);

        let min = new Date().getMinutes();
        (min < 10) && (min = `0${min}`);

        let sec = new Date().getSeconds();
        (sec < 10) && (sec = `0${sec}`);

        setCurrentDate(
          `${hours}:${min}:${sec}`
        );
      },
      1000
    );
  }, []);

  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Image
          style={styles.workerpic}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={{ fontSize: 30, color: 'white' }}>Worker Name</Text>
        <Text style={{ fontSize: 20, color: 'white' }}>worker@email.com</Text>
      </View>
      <View style={ styles.body }>
        <View style={styles.content}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>{currentDate}</Text>
          {OutWork ? 
            <Button
              title="Bater ponto"
              color={'#1A2C26'}
              onPress={startWork}
            />
            :
            <Button
              title="Finalizar Ponto"
              color={'red'}
              onPress={finishWork}
            />
          }
        </View>
        <View style={ styles.content }>
          <Text style={{fontSize: 20, fontWeight: 'bold'}} >Total horas extras</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}} >19:00:00</Text>
        </View>
        <View style={{ marginLeft: 20, marginRight: 20, borderBottomWidth: 1 }} >
          <Text style={{ textAlign: 'center', borderBottomWidth: 1, fontSize: 20, fontWeight: 'bold' }}>Pontos do dia</Text>
          <ScrollView>
            <DayPointsHistory/>
          </ScrollView>
        </View >
        <View style={ styles.content }>
          <TextInput
            style={styles.input}
            placeholder="digite o motivo da sua falta aqui."
            onChangeText={text => setJustifyFault(text)}
            value={justifyFault}
          />
          <Button
            title="Justificar falta"
            color={'red'}
            onPress={faultJustify}
          />
        </View>
      </View>
      <View style={styles.pageChange}>
        <View style={styles.pageChangeCotent} >
          <SiMicrosoftpowerpoint style={styles.iconsPages}/>
          <BsClockHistory style={styles.iconsPages}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 'auto',
    height: 'auto',
  },
  workerpic: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'stretch',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B4744',
    width: 'auto',
    height: 300,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  body: {
    gap: 20,
    alignItemsn: 'center',
  },
  pageChange: {
    position: 'relative',
    alignItems: 'center',
  },
  pageChangeCotent: {
    position: 'absolute',
    backgroundColor: '#1B4744',
    gap: 20,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 100,
    position: 'absolute',
    top : 50,
    zIndex: 1,
  },
  iconsPages: {
    borderRadius: 100,
    width: 50,
    height: 50,
  }
});
