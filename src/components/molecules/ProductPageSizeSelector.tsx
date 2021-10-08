import React from 'react';
import {Text, View} from 'react-native';
import {t} from '../../styles';
import {theme} from '../../theme';
import {SmallButton} from '../atoms/base/SmallButton';

export function ProductPageSizeSelector() {
  return (
    <>
      {/* Select Size */}
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <View
          style={{
            height: 2,
            flex: 1,
            backgroundColor: theme.colors.touchablePrimary,
            marginHorizontal: theme.spacing.m,
            borderRadius: 999,
          }}
        />
        <Text
          style={[
            t.mediumButton,
            {lineHeight: theme.fontSize.mediumButton * 1.4},
          ]}>
          Selecione o tamanho
        </Text>
        <View
          style={{
            height: 2,
            flex: 1,
            backgroundColor: theme.colors.touchablePrimary,
            marginHorizontal: theme.spacing.m,
            borderRadius: 999,
          }}
        />
      </View>
      {/* Size selection buttons */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: theme.spacing.xs * 1.5,
          marginBottom: theme.spacing.xxs * 1.5,
          marginHorizontal: theme.spacing.m,
          flexWrap: 'wrap',
        }}>
        <SmallButton
          onPress={() => {}}
          title={'13'}
          color={'transparent'}
          style={{
            borderWidth: 1.2,
            borderColor: theme.colors.touchableSecondary,
            margin: theme.spacing.xs,
          }}
          fontFamily={'Lato-Regular'}
        />
        <SmallButton
          onPress={() => {}}
          title={'14'}
          color={theme.colors.touchableSecondary}
          style={{
            borderWidth: 1.2,
            borderColor: theme.colors.touchableSecondary,
            margin: theme.spacing.xs,
          }}
          fontFamily={'Lato-Bold'}
        />
        <SmallButton
          onPress={() => {}}
          title={'15'}
          color={'transparent'}
          style={{
            borderWidth: 1.2,
            borderColor: theme.colors.touchableSecondary,
            margin: theme.spacing.xs,
          }}
          fontFamily={'Lato-Regular'}
        />
        <SmallButton
          onPress={() => {}}
          title={'16'}
          color={'transparent'}
          style={{
            borderWidth: 1.2,
            borderColor: theme.colors.touchableSecondary,
            margin: theme.spacing.xs,
          }}
          fontFamily={'Lato-Regular'}
        />
      </View>
    </>
  );
}
