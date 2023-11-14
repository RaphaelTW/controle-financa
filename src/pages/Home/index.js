import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance'

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Raphael Sputnik"/>
        <Balance/>
        
      <Text>Página Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
