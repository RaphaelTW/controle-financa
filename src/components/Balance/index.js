import { View, Text, StyleSheet, } from 'react-native';

export default function Balance() {
 return (
   <View style={styles.container}>
    <Text
    style={styles.item}></Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',
    }
})