import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ColorValue,
  useWindowDimensions,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {theme} from '../../theme';

interface BaseButtonProps {
  title?: string;
  onPress: () => void;
  onLongPress?: () => void;
  style?: StyleProp;
  pressColor?: ColorValue;
  styleInternal?: StyleProp;
  textStyle: StyleProp;
  minHeight: number;
  color: ColorValue;
  children?: JSX.Element[] | JSX.Element;
}

export function BaseButton({
  title,
  onPress,
  style,
  styleInternal,
  children,
  onLongPress,
  pressColor,
  minHeight,
  textStyle,
  color,
}: BaseButtonProps) {
  const fontScale = useWindowDimensions().fontScale;
  return (
    <View
      style={[
        {
          overflow: 'hidden',
          borderRadius: 999,
          height:
            textStyle.lineHeight * fontScale +
            (minHeight - textStyle.lineHeight),
          minHeight: minHeight,
        },
        style,
      ]}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          pressColor || theme.colors.background,
          false,
        )}
        useForeground
        onPress={onPress}
        onLongPress={onLongPress}>
        <View
          style={[
            children ? styleInternal : null,
            title
              ? {
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal:
                    0.375 * minHeight * (fontScale <= 1 ? 1 : fontScale * 0.85),
                }
              : null,
            {height: '100%', backgroundColor: color},
          ]}>
          {title ? <Text style={[textStyle]}>{title}</Text> : null}
          {children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
