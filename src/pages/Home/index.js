import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance'

const list = [
    {
        id: 1,
        label: 'Boleto Enel',
        value: '180,75',
        date: '25/11/2023',
        type: 0 //Despesas
    },
    {
        id: 2,
        label: 'Pix João Nome',
        value: '1.450,00',
        date: '25/11/2023',
        type: 1 //Receita e entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '8.750,65',
        date: '25/11/2023',
        type: 1 //Receita e entradas
    },
    {
        id: 4,
        label: 'Pix Jose Pessoa',
        value: '1.250,82',
        date: '25/11/2023',
        type: 1 //Receita e entradas
    }
]

export default function Home() {
  return (
    <View style={styles.container}>

        <Header name="Raphael Sputnik"/>
        <Balance saldo="54.875,60" gastos="-154,75"/>

        <Text style={styles.title}>Últimas Movimentações</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E7E5E5',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  }
});
