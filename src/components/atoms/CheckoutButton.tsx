import React from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArrowM} from '../../assets/icons/ArrowM';
import {t, v} from '../../styles';
import {theme} from '../../theme';
import {BaseButton} from './BaseButton';

//TODO: finish this
export function CheckoutButton() {
  const fontScale = useWindowDimensions().fontScale;
  const insets = useSafeAreaInsets();
  return (
    <BaseButton
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
      color={theme.colors.touchableSecondary}
      minHeight={theme.buttons.medium}
      shadow={v.shadow}
      styleInternal={[
        {
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft:
            0.375 *
            theme.buttons.medium *
            (fontScale <= 1 ? 1 : fontScale * 0.85),
          paddingRight:
            0.375 *
              theme.buttons.medium *
              (fontScale <= 1 ? 1 : fontScale * 0.85) -
            1,
          flexDirection: 'row',
        },
      ]}
      textStyle={t.smallButton}>
      <Text
        style={[t.mediumButton, {marginRight: theme.spacing.s}]}
        numberOfLines={1}>
        Fechar pedido
      </Text>
      <ArrowM />
    </BaseButton>
  );
}
