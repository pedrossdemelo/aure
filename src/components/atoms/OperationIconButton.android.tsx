import React from 'react';
import {
  View,
  useWindowDimensions,
  ColorValue,
  TouchableNativeFeedback,
} from 'react-native';
import {v} from '../../styles';
import {theme} from '../../theme';

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
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(pressColor, true)}
      useForeground
      onPress={onPress}
      onLongPress={onLongPress}
      hitSlop={v.smallHitSlop}>
      <View
        style={[
          v.center,
          {
            height: smallButtonHeight,
            width: smallButtonHeight,
          },
        ]}>
        {children}
      </View>
    </TouchableNativeFeedback>
  );
}
