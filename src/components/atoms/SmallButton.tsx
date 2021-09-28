import React from 'react';
import {View, Text, StyleProp, ColorValue, Dimensions} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
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
  return (
    <TouchableHighlight
      onPress={onPress}
      onLongPress={onLongPress}
      underlayColor={pressColor || theme.colors.background}
      activeOpacity={2 / 3}
      style={[
        {
          overflow: 'hidden',
          borderRadius: 300,
          height:
            theme.fontSize.smallButton *
              1.2 *
              Dimensions.get('screen').fontScale +
            7.6 * 2,
          minHeight: 32,
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
                paddingHorizontal: 12,
                paddingVertical: 7.6,
              }
            : null,
          {height: '100%', backgroundColor: theme.colors.touchablePrimary},
        ]}>
        {title ? <Text style={[t.smallButton]}>{title}</Text> : null}
        {children}
      </View>
    </TouchableHighlight>
  );
}
