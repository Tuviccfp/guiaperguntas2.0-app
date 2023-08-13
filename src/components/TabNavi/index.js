import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home'
import CreateAsk from '../CreateAsk'
import Settings from '../Settings'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function TabNavi() {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if(route.name === 'Início') {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (route.name === 'Criar Pergunta') {
                    iconName = focused ? 'ios-add' : 'ios-add-outline'
                } else if (route.name === 'Configurações') {
                    iconName = focused ? 'settings' : 'settings-outline'
                }
                //Retorna o componente icon.
                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
        })}>
            <Tab.Screen name='Início' component={Home}/>
            <Tab.Screen name='Criar Pergunta' component={CreateAsk}/>
            <Tab.Screen name='Configurações' component={Settings}/>
        </Tab.Navigator>
    )
}