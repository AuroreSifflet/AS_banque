import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/interface";

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Revenu")}>
        <Text style={styles.btnText}>Revenus</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Depense")}>
        <Text style={styles.btnText}>Dépenses</Text>
      </TouchableOpacity>
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