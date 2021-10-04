import React from 'react';
import {View, Platform, FlatList, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {FilterButton} from '../components/atoms/FilterButton';
import {TranslucentHeader} from '../components/atoms/TransluscentHeader';
import ProductFromList2, {
  ProductFromList,
} from '../components/molecules/Product';
import {getHookedStyles} from '../styles';
import {sample} from '../assets/sample';

import {theme} from '../theme';

function makeid(length: number) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const productData = [];

function fknLol() {
  for (let i = 0; i < 250; i++) {
    let n = i + 1;
    productData.push({
      brand: 'Marca ' + n,
      name: 'Anel feito com' + makeid(8),
      price: makeid(8),
      installmentPrice: makeid(4),
      image:
        n % 2 === 0
          ? 'https://res.cloudinary.com/aure/image/upload/v1633370229/Tiffany%20Thumbnails/Tiffany%20T1/Anel_largo_True_nvkyok.webp'
          : 'https://res.cloudinary.com/aure/image/upload/v1633370229/Tiffany%20Thumbnails/Tiffany%20T1/Anel_Wire_com_diamantes_dfcplg.webp',
      key: n,
    });
  }
  return;
}

fknLol();

export function ProductFlatList() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyles(insets, window);
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      overScrollMode={
        Platform.OS === 'android' && Platform.Version < 31 ? 'never' : 'always'
      }
      contentContainerStyle={[
        hs.mainScrollViewContentContainer,
        {paddingTop: insets.top + 46 + theme.spacing.s},
      ]}
      style={{paddingHorizontal: theme.spacing.s + 4}}
      numColumns={2}
      initialNumToRender={20}
      maxToRenderPerBatch={48}
      data={sample}
      ListFooterComponent={() => (
        <View style={{height: theme.buttons.medium + theme.spacing.xs}} />
      )}
      renderItem={({item}) => (
        <ProductFromList2
          image={item.thumbnail}
          price={item.price}
          name={item.name}
          brand={item.brand}
        />
      )}
    />
  );
}

function Catalog() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyles(insets, window);
  return (
    <>
      <TranslucentHeader title={'Catálogo'} />
      <View style={{flex: 1}}>
        <ProductFlatList />
      </View>
      <FilterButton />
    </>
  );
}

export default React.memo(Catalog);
