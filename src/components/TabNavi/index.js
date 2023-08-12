import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import Home from '../Home'
import CreateAsk from '../CreateAsk'
import Settings from '../Settings'

const Tab = createBottomTabNavigator();

export default function TabNavi() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Início' component={Home}/>
            <Tab.Screen name='Criar Pergunta' component={CreateAsk}/>
            <Tab.Screen name='Configurações' component={Settings}/>
        </Tab.Navigator>
    )
}