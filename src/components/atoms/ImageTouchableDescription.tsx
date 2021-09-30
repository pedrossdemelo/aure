import React from 'react';
import {ColorValue, StyleProp, Text} from 'react-native';
import {Placeholder} from '../../screens/Home';
import {t, v} from '../../styles';
import {theme} from '../../theme';
import {ImageTouchableFeedback} from './ImageTouchableFeedback';

interface ImageTouchableDescriptionProps {
  title: string;
  source?: string;
  flex: number;
  pressColor?: ColorValue;
  style?: StyleProp;
  onPress?: () => void;
  onLongPress?: () => void;
  numberOfLines?: number;
}
export function ImageTouchableDescription({
  title,
  source,
  onPress,
  onLongPress,
  style,
  numberOfLines,
  pressColor,
  flex,
}: ImageTouchableDescriptionProps) {
  return (
    <ImageTouchableFeedback
      source={source || Placeholder}
      style={style}
      shadow={[v.shadow]}
      pressColor={pressColor || theme.colors.background}
      onPress={onPress}
      onLongPress={onLongPress}
      styleInternal={v.imageTouchableAlignmentRight}
      flex={flex}>
      <Text
        style={[t.title, t.imageTouchableTextAlignmentRight]}
        numberOfLines={numberOfLines || 1}>
        {title}
      </Text>
    </ImageTouchableFeedback>
  );
}
