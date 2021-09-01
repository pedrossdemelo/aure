import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  // BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BAP_Home from '../assets/icons/BAP_Home';
import BAP_Home_focused from '../assets/icons/BAP_Home_focused';
import BAP_Catalog from '../assets/icons/BAP_Catalog';
import BAP_Catalog_focused from '../assets/icons/BAP_Catalog_focused';
import BAP_Favorites from '../assets/icons/BAP_Favorites';
import BAP_Favorites_focused from '../assets/icons/BAP_Favorites_focused';
import BAP_Bag from '../assets/icons/BAP_Bag';
import BAP_Bag_focused from '../assets/icons/BAP_Bag_focused';

import Home from '../screens/Home';
import Catalog from '../screens/Catalog';
import Favorites from '../screens/Favorites-products';
import Bag from '../screens/Bag';

const primaryGradient = {
  100: '#F8F1EA',
  200: '#F2E6D8',
  300: '#EEDFCC',
  400: '#E0C8B0',
  500: '#D2B095',
  600: '#A68C7A',
  700: '#90786C',
  800: '#321A12',
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          borderTopStartRadius: 16,
          borderTopEndRadius: 16,
          backgroundColor: primaryGradient[100],
          borderTopWidth: 0,
          paddingHorizontal: 16,
          paddingBottom: insets.bottom + 5.3,
          paddingTop: 3,
          height: 52 + insets.bottom,
        },
      }}>
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <BAP_Home_focused /> : <BAP_Home />,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
                fontSize: 10.8,
                color: focused ? primaryGradient[800] : primaryGradient[600],
                alignItems: 'center',
              }}>
              Início
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Catálogo"
        component={Catalog}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <BAP_Catalog_focused /> : <BAP_Catalog />,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
                fontSize: 10.8,
                color: focused ? primaryGradient[800] : primaryGradient[600],
                alignItems: 'center',
              }}>
              Catálogo
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <BAP_Favorites_focused /> : <BAP_Favorites />,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
                fontSize: 10.8,
                color: focused ? primaryGradient[800] : primaryGradient[600],
                alignItems: 'center',
              }}>
              Favoritos
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Bolsa"
        component={Bag}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <BAP_Bag_focused /> : <BAP_Bag />,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
                fontSize: 10.8,
                color: focused ? primaryGradient[800] : primaryGradient[600],
                alignItems: 'center',
              }}>
              Bolsa
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
