import * as React from "react";

import { Text, View, StyleSheet } from "react-native";

interface CardHeaderprops {
  amount: string;
  date: string;
  category: string;
  type: string;
}
const CardHeader = ({ amount,  date, category, type }: CardHeaderprops) => {
/* console.log(amount); */
  return (
    <View /* style={styles.viewPartie} */>
      <Text style={[styles.textMontant, type === "incomes" ? styles.green : styles.red]}>{amount}</Text>
      <Text style={styles.text}>{date}</Text>
      <Text style={styles.text}>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //styles des View - Flex
/*   viewPartie: {
    flex: 1,
    borderColor: "blue",
    borderWidth: 1,
    maxHeight: 50,
    minHeight: 50,
    justifyContent: "center",
  },
 */
  //styles des éléments text
  textMontant: {
    paddingRight: 10,
    textAlign: "right",
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  text: {
    paddingRight: 10,
    textAlign: "right",
    color: "gray",
    fontSize: 14,
  },
  red: {
    textAlign: "right",
    color: "red",
    fontSize: 14,
  },
  green: {
    textAlign: "right",
    color: "green",
    fontSize: 14,
  },
});

export default CardHeader;