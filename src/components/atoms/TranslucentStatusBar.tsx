import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getHookedStyles} from '../../styles';

export function TranslucentStatusBar() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyles(insets, window);
  return <View style={[hs.translucentStatusBar]} />;
}
