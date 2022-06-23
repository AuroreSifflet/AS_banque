import Realm from "realm";

/* CREATION D'UN MODELE D'OBJET
Le modèle d'objet définit les données que vous pouvez stocker dans Realm Database
Pour définir un type d'objet Realm, créez un objet de schéma qui spécifie les types name et properties. 
Le NAME du type doit être UNIQUE parmi les types d'objets d'un domaine.
*/

const DogSchema = {
    name: "Dog",
    properties: {
        name: { type: "string", indexed: true },//Un index augmente considérablement la vitesse de certaines opérations de lecture au prix de temps d'écriture légèrement plus lents et d'une surcharge de stockage supplémentaire. Les index sont particulièrement utiles pour la comparaison d'égalité, telle que la recherche d'un objet en fonction de la valeur d'une propriété.
        breed: "string?", //Marquer une propriété comme falcultative
        status: 'string',
        miles: { type: "int", default: 0 },//Définir une valeur de propriété par défaut
        first_name: { type: 'string', mapTo: 'firstName' }//Remapper une propriété. Pour utiliser dans votre code un nom de propriété différent de celui stocké dans la base de données du domaine, définissez mapTole nom de la propriété tel qu'il apparaît dans votre code.
    },
    primaryKey: '_id', //Une clé primaire est une propriété qui identifie de manière unique un objet. Realm Database indexe automatiquement les propriétés de la clé primaire, ce qui vous permet de lire et de modifier efficacement les objets en fonction de leur clé primaire.Vous ne pouvez pas modifier la propriété de clé primaire d'un type d'objet après l'ajout d'un objet de ce type à un domaine et vous ne pouvez pas modifier la valeur de clé primaire d'un objet.
};


/* Définir les propriétés de relation */

//1/ to-One - Pour définir une propriété de relation à un, spécifiez le nom du type d'objet associé comme type de propriété. Par exemple, vous pouvez modéliser une personne ayant au plus un chien de compagnie comme une relation à un. Lorsque vous déclarez une relation à un dans votre modèle d'objet, il doit s'agir d'une propriété facultative.
const Person = {
    name: "Person",
    properties: {
      name: "string",
      birthdate: "date",
      dog: "Dog?" //Le Personschéma d'objet suivant spécifie qu'une personne peut posséder ou non un seul Dog. S'ils possèdent un Dog, Realm s'y connecte via la dogpropriété
    }
  };
  const Dog = {
    name: "Dog",
    properties: {
      name: "string",
      age: "int",
      breed: "string?"
    }
  };

  //2/ To-Many - Une relation à plusieurs mappe une propriété à zéro ou plusieurs instances d'un autre type d'objet. Par exemple, vous pouvez modéliser une personne ayant n'importe quel nombre de chiens de compagnie comme une relation à plusieurs.
  const PersonToMany = {
    name: "Person",
    properties: {
      name: "string",
      birthdate: "date",
      dogs: "Dog[]" //Une application peut utiliser les schémas d'objets suivants pour indiquer qu'une personne peut posséder plusieurs chiens en les incluant dans sa dog propriété
    }
  };
  const DogToMany = {
    name: "Dog",
    properties: {
      name: "string",
      age: "int",
      breed: "string?"
    }
  };


/*  3/ relation inverse / Une application peut utiliser les schémas d'objets suivants pour indiquer qu'un utilisateur peut être affecté à plusieurs tâches et que chaque tâche doit automatiquement conserver une trace de l'utilisateur auquel elle est affectée. */

  const User = {
    name: "User",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      _partition: "string",
      name: "string",
      tasks: "Task[]" //un user peut avoir plusieurs tâches
    }
  };
  
  const Task = {
    name: "Task",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      _partition: "string",
      text: "string",
      assignee: {
        type: 'linkingObjects',
        objectType: 'User', //tache assigné à un unique user
        property: 'tasks'
      }
    }
  };
  
/* Définir une propriété d'objet incorporé - Un objet incorporé existe en tant que données imbriquées à l'intérieur d'un objet parent unique et spécifique. Il hérite du cycle de vie de son objet parent et ne peut pas exister en tant qu'objet Realm indépendant. Realm supprime automatiquement les objets intégrés si leur objet parent est supprimé ou lorsqu'il est remplacé par une nouvelle instance d'objet intégré.*/

const AddressSchema = { //Shema enfant
    name: "Address",
    embedded: true, //peut-être embarqué
    properties: {
      street: "string?",
      city: "string?",
      country: "string?",
      postalCode: "string?",
    },
};
  
const ContactSchema = { //1 des 2 Objet parent
  name: "Contact",
  primaryKey: "_id",
  properties: {
    _id: "objectId",
    name: "string",
    address: "Address", // Cet objet Contact ne peut embarquer qu'un seul Address objet.
  },
};
  
const BusinessSchema = {
  name: "Business",
  primaryKey: "_id",
  properties: {
    _id: "objectId",
    name: "string",
    addresses: { type: "list", objectType: "Address" }, //Cet objet Business peut embarquer une liste d' Address objets
  },
};