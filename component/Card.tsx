import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, TextInput, ScrollView } from "react-native";
import moment from "moment";

import dataCard from "../js/data.json";
import CardHeader from "./CardHeader";
import UserPicker from "./UserPicker";
import CalculSolde from "./SumAmount";

import { incomes } from "../type/incomes";
import { expenses } from '../type/expenses';



const Card = () => {
  
  // Formatage des dates : 2021-05-26T01:52:50.288Z => 26/05/2021
  const converDate = (date: string): string => moment(date).format("DD/MM/YYYY");
  
/* ************** PICKER affichage des données pour l'utilisitateur sélectionné ************** */

//1- state pour sélectionner un utilisateur
  const [userSelected, setNewuserSelected] = React.useState(dataCard[0].user); 
    
  //2- nameUser / réccupération des données user de fichier json dans un tableau - cad tous les noms des utilistaeurs - utile pour le label du picker et pour la boucle nameUser.length donne le nombre d'user
  /*   const nameUser: string[] = dataCard.map(value => value.user) on peut mettre ce que nous voulons comme mot item, value, toto ... */
  const nameUser: string[] = dataCard.map(item => item.user)
  //console.log(nameUser); ["Mayer Franklin", "Ross Hess", "Ingram Witt", "Mccormick Harrison", "Garcia Brown", "Ramsey Le", "Witt Tyler", "Diana Leon", "Millie Mcknight", "Daugherty Middleton"]
  // console.log(nameUser[0]);  Mayer Franklin
  // console.log(nameUser.length); //10
  
/* 3- result / on récupère la liste des données de l'utilisateur sélectionné POUR AFFICHER LES DONNEES DANS LES FLATLIST
La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback */
/*   const result = dataCard.filter(user => {return user._id === "18c79361-d05f-437b-9909-685db8d4910a"}); */
  const result = dataCard.filter(item => item.user === userSelected);
  //console.log(result[0]); 
  /* si nameUser[0] sélectionné [{"_id": "18c79361-d05f-437b-9909-685db8d4910a", "expenses": [[Object], [Object], [Object], [Object], [Object]], "incomes": [[Object], [Object], [Object], [Object], [Object]], "user": "Mayer Franklin"}] */
/* si nameUser[2] sélectionné [{"_id": "59f4c453-7f9f-4f2d-b16a-c959ccbe9207", "expenses": [[Object], [Object], [Object], [Object], [Object]], "incomes": [[Object], [Object], [Object], [Object], [Object]], "user": "Ingram Witt"}] */


/* ************** FIN - PICKER affichage des données pour l'utilisitateur sélectionné ************** */

return (
  <View style={styles.container}>
          
    {/* Picker un select avec les noms d'user avec affichage de leurs données avec flatlist */}
    <View>
        <UserPicker selectedValue={userSelected} onValueChange={setNewuserSelected} nameUser={nameUser} />
    </View>
    {/* Solde du compte de l'user sélectionné */}
    <View>
        <CalculSolde incommesArray={result[0].incomes} expencesArray={result[0].expenses} />
    </View>
              
    {/* FlatList Incomes */}
    <View>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        data={result[0].incomes}
        keyExtractor={(item : incomes) => item._id_income}
        renderItem={({ item }) => (
          <View style={styles.viewCardIncomes} key={item._id_income}>
            <CardHeader type="incomes" amount={item.amount} date={converDate(item.date)} category={item.category} key={item._id_income} />
        {/*     <CardHeader amount={item.incomes[0].amount} date={item.incomes[0].date} category={item.incomes[0].category} /> */}
            {/* <CardBody date={item.date} category={item.category} /> */}
          </View>
        )}
      />
    </View>
    {/* FlatList Expenses */}
    <View>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
        data={result[0].expenses}
        keyExtractor={(item : expenses) => item._id_expense}
        renderItem={({ item }) => (
          <View style={styles.viewCardExpenses} key={item._id_expense}>
            <CardHeader type="expenses" amount={item.amount} date={converDate(item.date)} category={item.category} key={item._id_expense} />
        {/*     <CardHeader amount={item.incomes[0].amount} date={item.incomes[0].date} category={item.incomes[0].category} /> */}
          </View>
        )}
      />
    </View>
  
  </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    paddingTop: 52,
    paddingHorizontal: 12,
  },
 
  viewCardExpenses: {
    backgroundColor: "#fff",
    width: "48%",
    borderColor: "red",
    borderWidth: 1,
    alignContent: "center",
    marginBottom: 10,
  },
  viewCardIncomes: {
    backgroundColor: "#fff",
    width: "48%",
    borderColor: "green",
    borderWidth: 1,
    alignContent: "center",
    marginBottom: 20,
  },
  //styles des éléments text
  textsize: {
    paddingLeft: 10,
    paddingRight: 5,
    color: "gray",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Card;