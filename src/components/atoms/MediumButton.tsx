import React from 'react';
import {StyleProp, ColorValue} from 'react-native';
import {t} from '../../styles';
import {theme} from '../../theme';
import {BaseButton} from './BaseButton';

interface MediumButtonProps {
  title?: string;
  onPress: () => void;
  onLongPress?: () => void;
  style?: StyleProp;
  pressColor?: ColorValue;
  styleInternal?: StyleProp;
  shadow?: StyleProp;
  children?: JSX.Element[] | JSX.Element;
}

export function MediumButton({
  title,
  onPress,
  style,
  styleInternal,
  children,
  onLongPress,
  shadow,
}: MediumButtonProps) {
  return (
    <BaseButton
      onPress={onPress}
      color={theme.colors.touchableSecondary}
      onLongPress={onLongPress}
      textStyle={t.mediumButton}
      pressColor={theme.colors.background}
      style={style}
      minHeight={theme.buttons.medium}
      title={title}
      shadow={shadow}
      styleInternal={styleInternal}>
      {children}
    </BaseButton>
  );
}
