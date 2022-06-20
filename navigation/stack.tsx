import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from './tab';
import { RootStackParamList } from './interface';
import DepenseScreen from '../screen/Depense';
import RevenuScreen from '../screen/Revenu';







const Stack = createNativeStackNavigator<RootStackParamList>();


const StackNav = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
       <Stack.Screen
         name="Depense"
         component={DepenseScreen}
       />
       <Stack.Screen
         name="Revenu"
         component={RevenuScreen}
       />
     </Stack.Navigator>
 </NavigationContainer>
  );
};

export default StackNav;