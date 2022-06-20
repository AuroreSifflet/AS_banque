import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';
import CompteScreen from '../screen/Compte';
import StatistiquesScreen from '../screen/Statistiques'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from './interface';


const Tab = createBottomTabNavigator<RootStackParamList>();
/* options={{ headerShown: false }} */

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={() => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    iconName = focused ? 'ios-home' : 'ios-home-outline';
                    
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
                })}/>
            <Tab.Screen name="Compte" component={CompteScreen} options={() => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    iconName = focused ? 'ios-card' : 'ios-card-outline';
                    
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
                })} />
            <Tab.Screen name="Statistiques" component={StatistiquesScreen} options={() => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                    
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
            })} />
        </Tab.Navigator>
    );
}

export default TabNavigation;