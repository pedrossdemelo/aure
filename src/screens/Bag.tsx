import React from 'react';
import {BagItem} from '../components/molecules/BagItem';
import {MainScrollView} from '../components/atoms/MainScrollView';
import {TranslucentStatusBar} from '../components/atoms/TranslucentStatusBar';
import {Platform} from 'react-native';
import {PricePreview} from '../components/molecules/PricePreview';
import {CheckoutButton} from '../components/atoms/CheckoutButton';

export default function Bag() {
  return (
    <>
      {Platform.OS === 'android' ? <TranslucentStatusBar /> : null}
      <MainScrollView>
        <PricePreview />
        <BagItem />
        <BagItem />
        <BagItem />
        <BagItem />
        <BagItem />
        <BagItem />
      </MainScrollView>
      <CheckoutButton />
    </>
  );
}
