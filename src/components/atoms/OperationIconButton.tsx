import React from 'react';
import {View, useWindowDimensions, ColorValue} from 'react-native';
import {theme} from '../../theme';
import {TouchableHighlight} from 'react-native';
import {v} from '../../styles';

interface IconButtonProps {
  children: JSX.Element;
  onPress?: () => void;
  onLongPress?: () => void;
  pressColor: ColorValue;
}
export function OperationIconButton({
  children,
  onPress,
  onLongPress,
  pressColor,
}: IconButtonProps) {
  const fontScale = useWindowDimensions().fontScale;
  const smallButtonHeight =
    theme.fontSize.smallButton * 1.2 * fontScale +
    (theme.buttonSize.small - theme.fontSize.smallButton * 1.2);
  return (
    <TouchableHighlight
      underlayColor={pressColor}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={2 / 3}
      hitSlop={v.smallHitSlop}
      style={{borderRadius: 999, overflow: 'hidden'}}>
      <View
        style={[
          v.center,
          {
            height: smallButtonHeight,
            width: smallButtonHeight,
            backgroundColor: theme.colors.touchablePrimary,
          },
        ]}>
        {children}
      </View>
    </TouchableHighlight>
  );
}
