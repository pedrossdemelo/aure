import React from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {ArrowIconXS} from '../../assets/icons/ArrowIconXS';
import {t} from '../../styles';
import {theme} from '../../theme';
import {SmallButton} from './SmallButton';

export function SizeSelectionButton() {
  const fontScale = useWindowDimensions().fontScale;
  return (
    <SmallButton
      onPress={() => {}}
      style={{
        margin: theme.spacing.s,
      }}
      styleInternal={{
        width: 136,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:
          0.375 * theme.buttonSize.small * (fontScale <= 1 ? 1 : fontScale * 0.85),
        paddingRight:
          0.375 *
            theme.buttonSize.small *
            (fontScale <= 1 ? 1 : fontScale * 0.85) -
          2,
        flexDirection: 'row',
      }}>
      <Text style={[t.smallButton]} numberOfLines={1}>
        Tam: 14
      </Text>
      <ArrowIconXS />
    </SmallButton>
  );
}
