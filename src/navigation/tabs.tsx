import React from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Svg, {Path} from 'react-native-svg';

import Home from '../screens/Home';
import Catalog from '../screens/Catalog';
import Favorites from '../screens/Favorites-products';
import Bag from '../screens/Bag';

const gradient = [
  '#F8F1EA',
  '#F2E6D8',
  '#EEDFCC',
  '#E0C8B0',
  '#D2B095',
  '#A68C7A',
  '#90786C',
  '#321A12',
];

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
          backgroundColor: 'rgba(248, 241, 234, 0.9)',
          borderTopWidth: 0,
          paddingHorizontal: 16,
          paddingBottom:
            insets.bottom === 0 ? insets.bottom + 5.3 : insets.bottom,
          paddingTop: 3,
          height:
            insets.bottom === 0 ? insets.bottom + 52 : insets.bottom + 47.7,
        },
      }}>
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Svg width={26} height={26} fill="none">
              <Path
                d="M24 20.077C24 22.24 22.206 24 19.973 24h-2.196a1.408 1.408 0 01-1.428-1.43v-3.483c0-.88-.732-1.577-1.647-1.577h-3.404c-.915 0-1.647.697-1.647 1.577v3.483c0 .77-.623 1.393-1.428 1.43H6.027C3.794 24 2 22.24 2 20.077V10.91c0-.843.403-1.65 1.098-2.163l7.614-5.977a3.691 3.691 0 012.27-.77c.805 0 1.61.257 2.27.77l7.613 5.94a2.694 2.694 0 011.098 2.163L24 20.077z"
                stroke={focused ? gradient[7] : gradient[5]}
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={focused ? gradient[7] : 'none'}
              />
            </Svg>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
                fontSize: 10.8,
                color: focused ? gradient[7] : gradient[5],
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
          tabBarIcon: ({focused}) => (
            <Svg width={26} height={26} fill="none">
              <Path
                d="M18.376 18.376a9.559 9.559 0 002.795-6.773C21.17 6.3 16.907 2 11.603 2 6.3 2 2 6.336 2 11.603c0 5.268 4.3 9.568 9.603 9.568a9.559 9.559 0 006.773-2.795zm0 0L23.5 23.5"
                stroke={focused ? gradient[7] : gradient[5]}
                strokeWidth={focused ? 2.4 : 1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </Svg>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
                fontSize: 10.8,
                color: focused ? gradient[7] : gradient[5],
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
          tabBarIcon: ({focused}) => (
            <Svg width={26} height={26} fill="none">
              <Path
                d="M13.744 23.889c-.408.148-1.08.148-1.488 0C8.776 22.665 1 17.56 1 8.909 1 5.089 3.988 2 7.672 2 9.856 2 11.788 3.088 13 4.769 14.212 3.088 16.156 2 18.328 2 22.012 2 25 5.09 25 8.909c0 8.652-7.776 13.756-11.256 14.98z"
                stroke={focused ? gradient[7] : gradient[5]}
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={focused ? gradient[7] : 'none'}
              />
            </Svg>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
                fontSize: 10.8,
                color: focused ? gradient[7] : gradient[5],
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
          tabBarIcon: ({focused}) => (
            <Svg width={26} height={26} viewBox="0 0 26 26" fill="none">
              <Path
                d="M18.793 6.738c2.86 0 5.207 2.35 5.207 5.215v6.831A5.207 5.207 0 0118.793 24H7.17C4.31 24.036 2 21.686 2 18.784v-6.83a5.207 5.207 0 015.207-5.216h11.586z"
                fill={focused ? gradient[7] : 'none'}
              />
              <Path
                d={
                  focused
                    ? 'M17.253 6.26A4.26 4.26 0 0013 2a4.26 4.26 0 00-4.253 4.26m10.046.478c2.86 0 5.207 2.35 5.207 5.215v6.831A5.207 5.207 0 0118.793 24H7.17C4.31 24.036 2 21.686 2 18.784v-6.83a5.207 5.207 0 015.207-5.216h11.586z'
                    : 'M17.253 10.374V6.26A4.26 4.26 0 0013 2a4.26 4.26 0 00-4.253 4.26v4.114m10.046-3.636c2.86 0 5.207 2.35 5.207 5.215v6.831A5.207 5.207 0 0118.793 24H7.17C4.31 24.036 2 21.686 2 18.784v-6.83a5.207 5.207 0 015.207-5.216h11.586z'
                }
                stroke={focused ? gradient[7] : gradient[5]}
                strokeWidth={1.6}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M8.748 10.375v-.789m8.504.79v-.79"
                stroke={focused ? gradient[0] : 'none'}
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? 'Lato-Bold' : 'Lato-Regular',
                fontSize: 10.8,
                color: focused ? gradient[7] : gradient[5],
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
