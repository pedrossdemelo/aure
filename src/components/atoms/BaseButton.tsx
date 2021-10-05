import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ColorValue,
  useWindowDimensions,
} from 'react-native';
import {TouchableHighlight} from 'react-native';
import {theme} from '../../theme';

// TODO: use stylesheet for inlinestyles
interface BaseButtonProps {
  title?: string;
  onPress: () => void;
  onLongPress?: () => void;
  style?: StyleProp;
  pressColor?: ColorValue;
  styleInternal?: StyleProp;
  textStyle: StyleProp;
  minHeight: number;
  children?: JSX.Element[] | JSX.Element;
  color: ColorValue;
  shadow?: StyleProp;
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
  shadow,
}: BaseButtonProps) {
  const fontScale = useWindowDimensions().fontScale;
  return (
    <View style={shadow}>
      <TouchableHighlight
        onPress={onPress}
        onLongPress={onLongPress}
        underlayColor={pressColor || theme.colors.background}
        activeOpacity={2 / 3}
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
          {title ? <Text style={textStyle}>{title}</Text> : null}
          {children}
        </View>
      </TouchableHighlight>
    </View>
  );
}
