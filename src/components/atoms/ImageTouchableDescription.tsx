import React from 'react';
import {ColorValue, Text, ViewStyle} from 'react-native';
import {Placeholder} from '../../screens/Home';
import {t, v} from '../../styles';
import {theme} from '../../theme';
import {ImageTouchableFeedback} from './base/ImageTouchableFeedback';

interface ImageTouchableDescriptionProps {
  title: string;
  source?: string;
  flex?: number;
  pressColor?: ColorValue;
  style?: ViewStyle;
  onPress?: () => void;
  onLongPress?: () => void;
  numberOfLines?: number;
}
export function ImageTouchableDescription(
  props: ImageTouchableDescriptionProps,
) {
  return (
    <ImageTouchableFeedback
      source={props.source || Placeholder}
      style={props.style}
      shadow={[v.shadow]}
      pressColor={props.pressColor || theme.colors.background}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      styleInternal={v.imageTouchableAlignmentRight}
      flex={props.flex || 0}>
      <Text
        style={[t.title, t.imageTouchableTextAlignmentRight]}
        numberOfLines={props.numberOfLines || 1}>
        {props.title}
      </Text>
    </ImageTouchableFeedback>
  );
}
