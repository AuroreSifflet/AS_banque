import Realm from "realm";

/* CREATION D'UN MODELE D'OBJET
Le modèle d'objet définit les données que vous pouvez stocker dans Realm Database
Pour définir un type d'objet Realm, créez un objet de schéma qui spécifie les types name et properties. 
Le NAME du type doit être UNIQUE parmi les types d'objets d'un domaine.
*/

/* const Bdd = () => { */
   


    const UserSchema = {
        name: "User",
        properties: {
            name: "string", //correspond à Nom concaténé à prénom
            incomes: { type: "list", objectType: "Incomes?" },
            expenses: { type: "list", objectType: "Expenses?" },
            _id: "objectId",
        },
        primaryKey: '_id',
    };

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
    };

/* Open a realm - Ouvrir un domaine pour intérargir avec la base de donnée */


(async () => {
  const realm = await Realm.open({
    path: 'myrealm',
    schema: [UserSchema],
  });

// Add a couple of Tasks in a single, atomic transaction
let user1, user2;
realm.write(() => {
  user1 = realm.create("User", {
    _id: 1,
    name: "Aurore",
  });
  user2 = realm.create("User", {
    _id: 2,
    name: "Marcel",
  });
  console.log(`created two tasks: ${user1.name} & ${user2.name}`);
});
// use task1 and task2




})();








 /*   
};

 export default Bdd; */


    /* [
    {
      "_id": "18c79361-d05f-437b-9909-685db8d4910a",
      "user": "Mayer Franklin",
      "incomes": [
        {
          "date": "2021-05-21T19:27:49.861Z",
          "amount": "€1,954.61",
          "category": "Prestations sociales",
          "comments": "occaecat aliqua enim id consectetur do non adipisicing voluptate occaecat",
          "_id_income": "1528bd57-cff6-4d93-925f-51d9488d4064"
        },
      ],
      "expenses": [
        {
          "date": "2021-04-29T23:42:36.654Z",
          "amount": "€1,070.58",
          "category": "Transport",
          "comments": "proident qui anim amet dolore ea elit cupidatat irure qui",
          "_id_expense": "daf7eaec-87f2-45be-a9cd-3710f4402d27"
        },
      
      ]
    },] */