import React from 'react';
import {BagItem} from '../components/molecules/BagItem';
import {MainScrollView} from '../components/atoms/MainScrollView';
import {TranslucentStatusBar} from '../components/atoms/TranslucentStatusBar';
import {Platform, View} from 'react-native';
import {PricePreview} from '../components/molecules/PricePreview';
import {CheckoutButton} from '../components/atoms/CheckoutButton';
import {theme} from '../theme';
import {v} from '../styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TranslucentHeader} from '../components/atoms/TransluscentHeader';

export default function Bag() {
  return (
    <>
      <TranslucentHeader title={'Bolsa'} />
      {Platform.OS === 'android' ? <TranslucentStatusBar /> : null}
      <MainScrollView style={{paddingTop: useSafeAreaInsets().top + 46}}>
        <PricePreview />
        <BagItem />
        <View style={v.bagItemLineSeparator} />
        <BagItem />
        <View style={v.bagItemLineSeparator} />
        <BagItem />
        <View style={v.bagItemLineSeparator} />
        <BagItem />
        <View style={v.bagItemLineSeparator} />
        <BagItem />
        <View style={v.bagItemLineSeparator} />
        <BagItem />
        <View style={{height: theme.buttons.medium + theme.spacing.s}} />
      </MainScrollView>
      <CheckoutButton />
    </>
  );
}
