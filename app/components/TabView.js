import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ConexionFetch from './conexionFetch';
import { SettingsScreen } from './SettingsScreen';
import { VideoScreen } from './VideoScreen';

const Tab = createMaterialBottomTabNavigator();

export const TabView = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="ConexionFetch"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="ConexionFetch"
        component={ConexionFetch}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="video-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-cog-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
