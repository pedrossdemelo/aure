import React from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArrowIconM} from '../../assets/icons/ArrowIconM';
import {t, v} from '../../styles';
import {theme} from '../../theme';
import {MediumButton} from './MediumButton';

export function CheckoutButton() {
  const fontScale = useWindowDimensions().fontScale;
  const insets = useSafeAreaInsets();
  return (
    <MediumButton
      onPress={() => {
        console.log('Checkout Button Pressed');
      }}
      style={[
        {
          position: 'absolute',
          zIndex: 1,
          right: theme.spacing.m,
          bottom:
            insets.bottom === 0
              ? insets.bottom + 52 + theme.spacing.s
              : insets.bottom + 47.7 + theme.spacing.s,
        },
      ]}
      shadow={v.shadow}
      styleInternal={[
        {
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft:
            0.375 *
            theme.buttonSize.medium *
            (fontScale <= 1 ? 1 : fontScale * 0.85),
          paddingRight:
            0.375 *
              theme.buttonSize.medium *
              (fontScale <= 1 ? 1 : fontScale * 0.85) -
            1.2,
          flexDirection: 'row',
        },
      ]}>
      <Text
        style={[t.mediumButton, {marginRight: theme.spacing.s, marginTop: 1}]}
        numberOfLines={1}>
        Fechar pedido
      </Text>
      <ArrowIconM />
    </MediumButton>
  );
}
