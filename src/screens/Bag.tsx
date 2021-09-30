import React from 'react';
import {BagItem} from '../components/molecules/BagItem';
import {MainScrollView} from '../components/atoms/MainScrollView';
import {TranslucentStatusBar} from '../components/atoms/TranslucentStatusBar';
import {Platform, View} from 'react-native';
import {PricePreview} from '../components/molecules/PricePreview';
import {CheckoutButton} from '../components/atoms/CheckoutButton';
import {theme} from '../theme';
import {v} from '../styles';

export default function Bag() {
  return (
    <>
      {Platform.OS === 'android' ? <TranslucentStatusBar /> : null}
      <MainScrollView>
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
