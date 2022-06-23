import React, {useEffect} from 'react';
import Realm from 'realm';
import {ObjectId} from 'bson';
import {Buffer} from 'buffer';
/*  Installer package BSON npm install react-native-get-random-values
BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.
*/
import 'react-native-get-random-values';

import {v4 as uuid} from 'uuid';
//uuid - Universally unique identifier (UUID), de l'anglais signifiant littéralement « identifiant unique universel », est en informatique un système permettant à des systèmes distribués d'identifier de façon unique une information sans coordination centrale importante.
//mport UserContext from './context/UserContext';
import StackNav from './navigation/stack';
import dataCard from './js/data.json';

import {dataCardType} from './type/dataCardType';
//import { contextValue } from './component/Card';
//1- state pour sélectionner un utilisateur
/* const [userSelected, setNewuserSelected] = React.useState(dataCard[0].user); 

const contextValue = {
  userSelected: userSelected,
  updateUser: setNewuserSelected,
} */
/* console.log(uuid()); */

const UserSchema = {
  name: 'User',
  primaryKey: '_id',
  properties: {
    personName: 'string', //correspond au Nom concaténé au prénom de l'user
    //incomes: { type: "list", objectType: "Incomes?" },
    //expenses: { type: "list", objectType: "Expenses?" },
    _id: 'objectId',
  },
};

/* } */

// Add a couple of Tasks in a single, atomic transaction

/* realm.write(() => {
const user1 = realm.create("User", {
_id: new BSON.ObjectId(),
personName: "Aurore",
});
const user2 = realm.create("User", {
_id: new BSON.ObjectId(),
personName: "Marcel",
});
console.log(`created two tasks: ${user1.name} & ${user2.name}`);
});  */

/* class User extends Realm.Object {
  personName!: string;
 _id!: ObjectId;

static generate(){return(
  _id: new Realm.BSON.ObjectId(),
);}
} */

/*
const IncomesSchema = { //Shema enfant
  name: "Incomes",
  embedded: true, //peut-être embarqué
  properties: {
      date: "string",
      amount: "string",
      category: "string",
      comments: "string?",
      //_id_income: "string?",
      _id: "objectId",
  },
};

const ExpensesSchema = { //Shema enfant
  name: "Expenses",
  embedded: true, //peut-être embarqué
  properties: {
      date: "string",
      amount: "string",
      category: "string",
      comments: "string?",
      _id_expense: "string?",
      _id: "objectId",
  },
};*/

const App = () => {
  /* Open a realm - Ouvrir un domaine avec UserSchema pour intérargir avec la base de donnée */
  /* const realm = () => { */
  useEffect(() => {
    const id1 = new ObjectId();
    //const id2 = new ObjectId();
    console.log(id1);

    Realm.open({
      path: 'myrealm',
      schema: [UserSchema],
    }).then(toto => {
      //création d'objet
      toto.write(() => {
        let user1 = toto.create('User', {
          // _id: new ObjectId(),
          _id: id1,
          personName: 'Aurore',
        });
      /*   let user2 = realm1.create('User', {
          _id: id2,
          personName: 'Marcel',
        }); */
        //console.log(`created two tasks: ${user1} & ${user2}`);
        console.log(user1);
      });

    const users = toto.objects("User");
     console.log(`There are ${users.length} cats`);
     console.log(users);
    });
  }, []);
  return (
    //<UserContext.Provider value={contextValue}>
    <>
      <StackNav />
      {/*  <Bdd /> */}
    </>
    //</UserContext.Provider>
  );
};

export default App;
