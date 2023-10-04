import { StyleSheet, View } from 'react-native';
import WorkerProfile from './views/workerProfile/index'

export default function App() {
  return (
    <View>
      <WorkerProfile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
