/**
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import SystemNavigationBar from 'react-native-system-navigation-bar';
// import {changeBarColors} from 'react-native-immersive-bars';
import {SafeAreaView} from 'react-native-safe-area-context';

import AureLogo from './src/assets/icons/AureLogo';
// import BAP_Home from './src/assets/icons/BAP_Home';
// import BAP_Catalog from './src/assets/icons/BAP_Catalog';
// import BAP_Favorites from './src/assets/icons/BAP_Favorites';
// import BAP_Bag from './src/assets/icons/BAP_Bag';

const primaryGradient = {
  '100': '#F8F1EA',
  '200': '#F2E6D8',
  '300': '#EEDFCC',
  '400': '#E0C8B0',
  '500': '#D2B095',
  '600': '#A68C7A',
  '700': '#90786C',
  '800': '#321A12',
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25.6,
    color: primaryGradient[800],
    lineHeight: 25.6 * 1.1,
  },
  homeHeader1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 19.2,
    color: primaryGradient[800],
    lineHeight: 19.2 * 1.5,
  },
});

export default function App() {
  SystemNavigationBar.setNavigationColor(primaryGradient[100], false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: primaryGradient[100]}}>
      <StatusBar
        backgroundColor={primaryGradient[100]}
        translucent={false}
        barStyle={'dark-content'}
      />
      <View style={styles.frame}>
        <View
          style={{
            marginVertical: 16,
            alignItems: 'center',
          }}>
          <AureLogo />
        </View>
        <View style={{marginHorizontal: 24}}>
          <Text style={styles.homeHeader1}>Bom dia,</Text>
          <Text style={styles.name}>Aurelia Stevens</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
