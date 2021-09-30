import React from 'react';
import {useWindowDimensions, Platform, StyleProp} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getHookedStyles} from '../../styles';

interface MainScrollViewProps {
  children?: JSX.Element[] | JSX.Element;
  style?: StyleProp;
}

export function MainScrollView({children, style}: MainScrollViewProps) {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyles(insets, window);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      overScrollMode={
        Platform.OS === 'android' && Platform.Version < 31 ? 'never' : 'always'
      }
      contentContainerStyle={[hs.mainScrollViewContentContainer, style]}>
      {children}
    </ScrollView>
  );
}
