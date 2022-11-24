import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/Home';
import Busca from '../pages/Busca';
import New from '../pages/New';
import Profile from '../pages/Profile';
import { AntDesign } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
        screenOptions={{
            unmountOnBlur: true,
            tabBarStyle: { height: Platform.OS === "ios" ? 100 : 60, borderTopColor:'trasnparent', backgroundColor:"#121212" },
            tabBarShowLabel: false,
          }}>

            <Tab.Screen
             name='Home'
             component={Home}
             options={{
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <AntDesign name="home" size={24} color={focused ? "#f2f2f2" : "gray"} />
                )
             }} />

            <Tab.Screen name='Busca' component={Busca}  options={{
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <Feather name="search" size={24} color={focused ? "#f2f2f2" : "gray"} />
                )
             }} />

            <Tab.Screen name='Novo' component={New} options={{
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <FontAwesome5 name="newspaper" size={24} color={focused ? "#f2f2f2" : "gray"} />
                )
             }}/>

            <Tab.Screen name='Perfil' component={Profile} options={{
                headerShown: false,
                tabBarIcon:({focused}) => (
                    <MaterialCommunityIcons name="face-man-profile" size={24} color={focused ? "#f2f2f2" : "gray"} />
                )
             }}/>

        </Tab.Navigator>
    );
}