import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Card from '../component/Card'
import UserPicker from '../component/UserPicker'


{/*  <Text>La date</Text>
 <Text>Libellé de l’opération</Text>
 <Text>Type de l’opération : débit/solde</Text>
 <Text>Le montant</Text> */}

const Compte = () => {
  return (
    <View style={styles.container}>
      
      <Card />
    </View>
  )
}

export default Compte

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "red",
  },

  viewCard: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    flex: 1,
  },
});