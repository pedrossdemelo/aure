import React from 'react';
import {View, Platform, FlatList, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {FilterButton} from '../components/atoms/FilterButton';
import {TranslucentHeader} from '../components/atoms/TransluscentHeader';
import ProductFromList2 from '../components/molecules/Product';
import {getHookedStyles} from '../styles';
import {sample} from '../assets/sample';

import {theme} from '../theme';

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
        {
          paddingTop: insets.top + 46 + theme.spacing.s,
          paddingHorizontal: theme.spacing.s + theme.spacing.xs,
        },
      ]}
      numColumns={2}
      initialNumToRender={20}
      maxToRenderPerBatch={36}
      data={sample}
      ListFooterComponent={() => (
        <View style={{height: theme.buttonSize.medium + theme.spacing.xs}} />
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
