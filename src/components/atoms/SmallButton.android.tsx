import React from 'react';
import {View, Text, StyleProp, ColorValue, Dimensions} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {t} from '../../styles';
import {theme} from '../../theme';

interface SmallButtonProps {
  title?: string;
  onPress: () => void;
  onLongPress?: () => void;
  style?: StyleProp;
  pressColor?: ColorValue;
  styleInternal?: StyleProp;
  children?: JSX.Element[] | JSX.Element;
}

export function SmallButton({
  title,
  onPress,
  style,
  styleInternal,
  children,
  onLongPress,
  pressColor,
}: SmallButtonProps) {
  const fontScale = Dimensions.get('screen').fontScale;
  return (
    <View
      style={[
        {
          overflow: 'hidden',
          borderRadius: 999,
          height:
            theme.fontSize.smallButton * 1.2 * fontScale +
            (32 - theme.fontSize.smallButton * 1.2),
          minHeight: 32,
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
                    12 * (fontScale <= 1 ? 1 : fontScale * 0.85),
                  paddingVertical: 7.3,
                }
              : null,
            {height: '100%', backgroundColor: theme.colors.touchablePrimary},
          ]}>
          {title ? <Text style={[t.smallButton]}>{title}</Text> : null}
          {children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
