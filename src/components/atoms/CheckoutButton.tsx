import React from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {ArrowM} from '../../assets/icons/ArrowM';
import {t, v} from '../../styles';
import {theme} from '../../theme';
import {BaseButton} from './BaseButton';
import {SmallButton} from './SmallButton';

//TODO: finish this
export function SizeSelectionButton() {
  const fontScale = useWindowDimensions().fontScale;
  return (
    <BaseButton
      onPress={() => {}}
      style={{
        margin: theme.spacing.s,
      }}
      minHeight={theme.buttons.medium}
      styleInternal={[
        {
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal:
            0.375 *
            theme.buttons.medium *
            (fontScale <= 1 ? 1 : fontScale * 0.85),
          flexDirection: 'row',
        },
      ]}>
      <Text style={[t.mediumButton]} numberOfLines={1}>
        Fechar pedido
      </Text>
      <ArrowM />
    </BaseButton>
  );
}
