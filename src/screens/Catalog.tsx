import React from 'react';
import {View, Text, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';

import {
  TouchableNativeFeedback,
  BaseButton,
} from 'react-native-gesture-handler';
import {theme} from '../theme';

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

function Catalog() {
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
          Catalogo
        </Text>
      </View>
      <View
        style={{
          borderRadius: 8,
          elevation: Platform.Version < 28 ? 1 : 3,
          shadowColor: '#D68F61',
          overflow: 'hidden',
          aspectRatio: 5 / 4,
          backgroundColor: 'white',
        }}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(theme.colors.foreground)}
          useForeground={true}>
          <View
            style={{
              borderRadius: 8,
              elevation: 2,
              shadowColor: '#D68F61',
              height: '100%',
              overflow: 'hidden',
              aspectRatio: 5 / 4,
            }}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
              <View
                style={{
                  backgroundColor: 'grey',
                  width: 10,
                  height: 10,
                }}
              />
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
      <BaseButton
        rippleColor={'black'}
        style={{borderRadius: 8, backgroundColor: 'white', padding: 20}}>
        <View
          style={{
            borderRadius: 8,
            elevation: 2,
            shadowColor: '#D68F61',
            width: 100,
            height: 200,
            overflow: 'hidden',
            aspectRatio: 5 / 4,
          }}>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View
              style={{
                backgroundColor: 'grey',
                width: 10,
                height: 10,
              }}
            />
          </View>
        </View>
      </BaseButton>
    </SafeAreaView>
  );
}

export default React.memo(Catalog);
