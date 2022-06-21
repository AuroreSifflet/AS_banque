 import * as React from 'react';
//mport UserContext from './context/UserContext';
import StackNav from './navigation/stack';
import dataCard from "./js/data.json";
//import { contextValue } from './component/Card';
//1- state pour sélectionner un utilisateur
/* const [userSelected, setNewuserSelected] = React.useState(dataCard[0].user); 

const contextValue = {
  userSelected: userSelected,
  updateUser: setNewuserSelected,
} */


 const App = () => {
   return (
    //<UserContext.Provider value={contextValue}>
   <StackNav />
//</UserContext.Provider>
   );
 };
 
 export default App;