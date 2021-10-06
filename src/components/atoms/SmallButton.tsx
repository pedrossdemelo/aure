import React from 'react';
import {StyleProp, ColorValue} from 'react-native';
import {t} from '../../styles';
import {theme} from '../../theme';
import {BaseButton} from './BaseButton';

interface SmallButtonProps {
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

export function SmallButton({
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
}: SmallButtonProps) {
  return (
    <BaseButton
      onPress={onPress}
      color={color || theme.colors.touchablePrimary}
      onLongPress={onLongPress}
      textStyle={{
        fontFamily: fontFamily || 'Lato-SemiBold',
        fontSize: theme.fontSize.smallButton,
        color: textColor || theme.colors.textPrimary,
        lineHeight: theme.fontSize.smallButton * 1.2,
      }}
      pressColor={theme.colors.background}
      style={style}
      minHeight={theme.buttonSize.small}
      title={title}
      shadow={shadow}
      styleInternal={styleInternal}>
      {children}
    </BaseButton>
  );
}
