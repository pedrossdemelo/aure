import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets, SafeAreaView} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';
// import BAP_Home from './src/assets/icons/BAP_Home';
// import BAP_Catalog from './src/assets/icons/BAP_Catalog';
// import BAP_Favorites from './src/assets/icons/BAP_Favorites';
// import BAP_Bag from './src/assets/icons/BAP_Bag';

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

const UserGreetings = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19.2,
          color: primaryGradient[800],
          lineHeight: 19.2 * 1.5,
        }}>
        Bom dia,
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 25.6,
          color: primaryGradient[800],
          lineHeight: 25.6 * 1.1,
        }}>
        Aurelia Stevens
      </Text>
    </View>
  );
};

export default function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        backgroundColor: primaryGradient[100],
      }}
      edges={['top', 'left', 'right']}>
      <StatusBar
        backgroundColor={primaryGradient[100]}
        translucent={false}
        barStyle={'dark-content'}
      />
      <View
        style={{
          marginVertical: 16,
          alignItems: 'center',
        }}>
        <AureLogo />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 24,
        }}>
        <UserGreetings />
      </View>
    </SafeAreaView>
  );
}
