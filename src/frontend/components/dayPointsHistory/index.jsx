
import { View, StyleSheet, Text } from 'react-native';

export default function DayPointsHistory() {

  return (
    <View>
      <View style={ styles.scrollbody }>
        <View style={ styles.scrollbodyleft }>
          <Text>00:00</Text>
          <Text style={{ color: 'gray' }}>às</Text>
          <Text>00:00</Text>
        </View>
        <Text style={{ color: 'gray' }}>05/05/2002</Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  scrollbody: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  scrollbodyleft: {
    flexDirection: 'row',
    gap: 10,
  },
});
