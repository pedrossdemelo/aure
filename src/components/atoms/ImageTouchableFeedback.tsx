import React from 'react';
import {View, ColorValue, StyleProp} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

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
  style,
  styleInternal,
  shadow,
  activeOpacity,
  flex,
}: ImageTouchableFeedbackProps) {
  return (
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
