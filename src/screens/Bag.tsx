import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';

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

export default function Bag() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        backgroundColor: primaryGradient[100],
      }}
      edges={['top', 'left', 'right']}>
      <View
        style={{
          marginVertical: 16,
          alignItems: 'center',
        }}>
        <AureLogo />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 19.2,
            color: primaryGradient[800],
            lineHeight: 19.2 * 1.5,
          }}>
          Bolsa
        </Text>
      </View>
    </SafeAreaView>
  );
}
