import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/interface";
import CalculSolde from '../component/SumAmount';
import dataCard from "../js/data.json";
//import { nameUser } from '../component/Card';

//console.log(nameUser);

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [userSelected, setNewuserSelected] = React.useState(dataCard[0].user); 
  
    const result = dataCard.filter(item => item.user === userSelected);
  return (
    <View style={styles.container}>
      <View>
     <CalculSolde incommesArray={result[0].incomes} expencesArray={result[0].expenses} />
     </View>
     <View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Revenu")}>
        <Text style={styles.btnText}>Revenus</Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Depense")}>
        <Text style={styles.btnText}>Dépenses</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height:30,
  },
  btnText:{
    color: "white",
    alignSelf: "center",
  }

});