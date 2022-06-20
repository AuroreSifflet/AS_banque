
import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { expenses } from '../type/expenses';
import { incomes } from '../type/incomes';


type SumAmountProps = {
    incommesArray: incomes[],
    expencesArray: expenses[],
   };

const CalculSolde = ({ incommesArray, expencesArray}: SumAmountProps) => {


/* ************** RECUPERATION DU PREMIER MONTANT EN STRING ************* */
//console.log(result[0].incomes[0].amount); //€1,954.61 si result[0] correspond à user1 alors result[0].incomes[0].amount user1/montant1
//console.log(result[0].incomes[1].amount); //€1,986.36 user1/montant2

//const montant1StringEuroVirgule = result[0].incomes[0].amount;


/* 
METHODE 1 - slice() et replace()
1/ retirer le € de la chaîne de caractère
const montant1StringVirgule = montant1StringEuroVirgule.slice(1);
console.log(montant1StringVirgule); //1,954.61
2/ retirer la virgule de la chaîne de caractère
const montant1String = montant1StringVirgule.replace(',', '');
console.log(montant1String);  //1954.61

METHODE 2 -  replace() et regex
retirer le € et la virgule de la chaîne de caractère

const montant1StringVirgule = montant1StringEuroVirgule.replace(/[€,]/g, '');
console.log(montant1StringVirgule); //1954.61 */

/** convertir la chaîne de caractère en nombre avec let montantstring = "1,954.61"; let montnumber = parseFloat(montantstring); **/
/* let montant1Number = parseFloat(montant1StringVirgule);
console.log(montant1Number); */

//let montant1Number = parseFloat(montant1StringEuroVirgule.replace(/[€,]/g, ''));
//console.log(montant1Number);

//console.log(typeof(montant1Number));
/* ************** FIN - RECUPERATION DU PREMIER MONTANT EN STRING ************* */

/* ************** MAP recupération de tous les incomes de l'user1 ************* */
//const dataIncome = dataCard[0].incomes.map((value) => value)
//console.log(dataIncome); //dataIncome est un tableau d'objet
/* [{"_id_income": "1528bd57-cff6-4d93-925f-51d9488d4064", "amount": "€1,954.61", "category": "Prestations sociales", "comments": "occaecat aliqua enim id consectetur do non adipisicing voluptate occaecat", "date": "2021-05-21T19:27:49.861Z"}, {"_id_income": "3b1935df-7d48-4726-96f4-d65fbd6c6322", "amount": "€1,986.36", "category": "Revenu foncier", "comments": "eiusmod commodo dolore qui eiusmod quis tempor mollit nisi aliqua", "date": "2021-05-11T15:29:53.541Z"}, {"_id_income": "ddb29c0f-5cee-4d06-9098-1ba45af110a0", "amount": "€2,851.88", "category": "Salaire et assimilé", "comments": "magna nostrud tempor ullamco consequat et veniam et veniam nostrud", "date": "2021-06-19T22:55:21.783Z"}, {"_id_income": "cfeb2424-d28b-48d1-8630-ed4397878823", "amount": "€3,449.57", "category": "Revenu financier", "comments": "consequat amet Lorem duis ullamco deserunt ex culpa reprehenderit in", "date": "2021-06-03T09:34:21.683Z"}, {"_id_income": "44c7286f-8b52-4973-ab8d-cf69f234c8a6", "amount": "€3,912.97", "category": "Prestations sociales", "comments": "pariatur ex irure officia dolore esse ex voluptate do nisi", "date": "2021-06-09T03:10:42.139Z"}] */


  {/* Calcul des revenus */}
  /* Incomes */
  //console.log(result[0].incomes);
  const initialValue = 0;
  const sumWithInitialIncomes = incommesArray.reduce((previousValue: number, currentValue: incomes) => previousValue + parseFloat(currentValue.amount.replace(/[€,]/g, '')),
    initialValue
  );
  
  console.log(sumWithInitialIncomes);
    /* Expences */
    const sumWithInitialExpenses = expencesArray.reduce((previousValue:number, currentValue:expenses) => previousValue + parseFloat(currentValue.amount.replace(/[€,]/g, '')),
    initialValue
  );
  
  console.log(sumWithInitialExpenses);
  
  const SumAmount = sumWithInitialIncomes - sumWithInitialExpenses;
  console.log(SumAmount);
  
  
  //console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(SumAmount));
  
  const SumAmountFormated = SumAmount.toFixed(2);
  console.log(SumAmountFormated);
  
  



return (
    <View>
    <Text>Votre solde est à : {SumAmountFormated} €</Text>
  </View>

    )
}

export default CalculSolde

const styles = StyleSheet.create({})

