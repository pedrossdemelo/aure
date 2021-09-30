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
  children?: JSX.Element[] | JSX.Element;
}

export function SmallButton({
  title,
  onPress,
  style,
  styleInternal,
  children,
  onLongPress,
}: SmallButtonProps) {
  return (
    <BaseButton
      onPress={onPress}
      color={theme.colors.touchablePrimary}
      onLongPress={onLongPress}
      textStyle={t.smallButton}
      pressColor={theme.colors.background}
      style={style}
      minHeight={theme.buttons.small}
      title={title}
      styleInternal={styleInternal}>
      {children}
    </BaseButton>
  );
}
