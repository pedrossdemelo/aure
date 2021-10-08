import React from 'react';
import {Text, useWindowDimensions} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import ArrowIconS from '../../../assets/icons/ArrowIconS';
import {t} from '../../../styles';
import {theme} from '../../../theme';

export function CollapsibleButton({title, onPress}: any) {
  const minHeight = theme.buttonSize.invisible;
  const fontScale = useWindowDimensions().fontScale;
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.m,
        justifyContent: 'space-between',
        height:
          t.mediumButton.lineHeight * fontScale +
          (minHeight - t.mediumButton.lineHeight),
        minHeight: minHeight,
      }}>
      <Text style={t.mediumButton}>{title}</Text>
      <ArrowIconS
        style={[
          {marginLeft: theme.spacing.m},
          {transform: [{rotate: '270deg'}]},
        ]}
      />
    </TouchableWithoutFeedback>
  );
}
