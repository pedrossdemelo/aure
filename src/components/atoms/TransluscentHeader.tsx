import React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getHookedStyles, t, v} from '../../styles';
import { theme } from '../../theme';

interface TranslucentHeaderProps {
  title: string;
}

export function TranslucentHeader({title}: TranslucentHeaderProps) {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyles(insets, window);
  return (
    <View style={[hs.transluscentHeader, v.center]}>
      <Text style={[t.header, {lineHeight: theme.fontSize.header * 1.5}]}>{title}</Text>
    </View>
  );
}
