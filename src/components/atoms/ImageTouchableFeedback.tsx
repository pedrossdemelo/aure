import React from 'react';
import {View, Platform, ColorValue, StyleProp} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {theme} from '../../theme';

interface ImageTouchableFeedbackProps {
  source: string;
  children?: JSX.Element[] | JSX.Element;
  style?: StyleProp;
  styleInternal?: StyleProp;
  shadow?: StyleProp;
  flex?: number;
  pressColor?: ColorValue;
  useForeground?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
  activeOpacity?: number;
}

export function ImageTouchableFeedback({
  source,
  children,
  onPress,
  onLongPress,
  pressColor,
  style,
  styleInternal,
  shadow,
  useForeground,
  activeOpacity,
  flex,
}: ImageTouchableFeedbackProps) {
  return Platform.OS === 'android' ? (
    <FastImage
      source={{uri: source}}
      style={[{flex: flex || undefined}, {overflow: 'hidden'}, style, shadow]}>
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
    </FastImage>
  ) : (
    <View style={[shadow, {flex: flex || undefined}]}>
      <View style={[style, {overflow: 'hidden'}]}>
        <TouchableOpacity
          onPress={onPress}
          onLongPress={onLongPress}
          activeOpacity={activeOpacity || 0.7}
          style={[{height: '100%'}]}>
          <FastImage source={{uri: source}} style={{flex: 1}}>
            <View style={[styleInternal, {height: '100%'}]}>{children}</View>
          </FastImage>
        </TouchableOpacity>
      </View>
    </View>
  );
}
