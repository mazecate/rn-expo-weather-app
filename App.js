import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, Button, useColorScheme } from 'react-native';
import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ForecastScreen from './screens/ForecastScreen';
import sunRiseLightScreen from './screens/sunRiseLightScreen';
import TestingScreen from './screens/TestingScreen';
import MapScreen from './screens/MapScreen';
import CustomDrawer from './components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feathericons from 'react-native-vector-icons/Feather';
// import './i18n';

export default function App() {  
  const Drawer = createDrawerNavigator();
  const scheme = useColorScheme();
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: true,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -15,
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
          },
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Forecast" 
          component={ForecastScreen} 
          options={{
            drawerIcon: ({color}) => (
              <Feathericons name="thermometer" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="Sun Rise & Light" 
          component={sunRiseLightScreen} 
          options={{
            drawerIcon: ({color}) => (
              <Feathericons name="sunrise" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen 
          name="EarthQuake" 
          component={MapScreen} 
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="earth-outline" size={22} color={color} />
            ),
          }}          
        />
        {/*<Drawer.Screen name="Testing" component={TestingScreen} />*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

