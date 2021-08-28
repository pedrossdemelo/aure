import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

// import BAP_Home from '../assets/icons/BAP_Home';
// import BAP_Catalog from '../assets/icons/BAP_Catalog';
// import BAP_Favorites from '../assets/icons/BAP_Favorites';
// import BAP_Bag from '../assets/icons/BAP_Bag';

import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: 52,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          backgroundColor: '#F8F1EA',
          borderTopWidth: 0,
          paddingHorizontal: 16,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontFamily: 'Lato-Regular',
          fontSize: 10.8,
          color: '#A68C7A',
        },
      }}>
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Catálogo" component={Home} />
      <Tab.Screen name="Favoritos" component={Home} />
      <Tab.Screen name="Bolsa" component={Home} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#D2B095',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
