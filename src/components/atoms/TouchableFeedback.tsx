import React from 'react';
import {ColorValue, View, ViewStyle, Platform, StyleProp} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {theme} from '../../theme';

export interface TouchableFeedbackProps {
  children?: JSX.Element[] | JSX.Element;
  style?: StyleProp;
  styleInternal?: StyleProp;
  pressColor?: ColorValue;
  useForeground?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  activeOpacity?: number;
}

export function TouchableFeedback({
  children,
  onPress,
  onLongPress,
  pressColor,
  style,
  styleInternal,
  useForeground,
  activeOpacity,
}: TouchableFeedbackProps) {
  return Platform.OS === 'android' ? (
    <View style={[{overflow: 'hidden'}, style]}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          pressColor || theme.colors.background,
          false,
        )}
        useForeground={useForeground || false}
        onPress={onPress}
        onLongPress={onLongPress}>
        <View style={[styleInternal, {height: '100%'}]}>{children}</View>
      </TouchableNativeFeedback>
    </View>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity || 0.7}
      style={[{overflow: 'hidden'}, style]}>
      <View style={[styleInternal, {height: '100%'}]}>{children}</View>
    </TouchableOpacity>
  );
}
