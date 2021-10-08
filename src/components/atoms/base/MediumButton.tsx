import React from 'react';
import {StyleProp, ColorValue} from 'react-native';
import {t} from '../../../styles';
import {theme} from '../../../theme';
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
  color?: ColorValue;
  textColor?: ColorValue;
  fontFamily?: string;
}

export function MediumButton({
  title,
  onPress,
  style,
  styleInternal,
  children,
  onLongPress,
  shadow,
  color,
  textColor,
  fontFamily,
}: MediumButtonProps) {
  return (
    <BaseButton
      onPress={onPress}
      color={color || theme.colors.touchableSecondary}
      onLongPress={onLongPress}
      textStyle={{
        fontFamily: fontFamily || 'Poppins-Medium',
        fontSize: theme.fontSize.mediumButton,
        color: textColor || theme.colors.textPrimary,
        lineHeight: theme.fontSize.mediumButton * 1.4,
      }}
      pressColor={theme.colors.background}
      style={style}
      minHeight={theme.buttonSize.medium}
      title={title}
      shadow={shadow}
      styleInternal={styleInternal}>
      {children}
    </BaseButton>
  );
}
