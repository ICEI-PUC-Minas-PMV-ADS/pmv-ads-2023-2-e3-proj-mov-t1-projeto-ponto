import { StyleSheet, View, Text } from 'react-native';
import WorkerProfile from './views/workerProfile/index'

export default function App() {
  return (
    <View style={ styles.container }>
      <WorkerProfile style={ styles.container } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
