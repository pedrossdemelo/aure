import React from 'react';
import {View, Platform, FlatList, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {FilterButton} from '../components/atoms/FilterButton';
import {TranslucentHeader} from '../components/atoms/TransluscentHeader';
import ProductFromList2, {
  ProductFromList,
} from '../components/molecules/Product';
import {getHookedStyles} from '../styles';

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
          ? 'https://storage.cloudconvert.com/tasks/a2f51e1f-8232-4847-8ef4-77e7739be1dc/tiffany-true-engagement-ring-with-a-tiffany-true-diamond-in-platinum-63594873_996049_ED_M.webp?AWSAccessKeyId=cloudconvert-production&Expires=1633232857&Signature=stoUFtX%2F4KhIYyFeu6pAzNnel3I%3D&response-content-disposition=inline%3B%20filename%3D%22tiffany-true-engagement-ring-with-a-tiffany-true-diamond-in-platinum-63594873_996049_ED_M.webp%22&response-content-type=image%2Fwebp'
          : 'https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-true-engagement-ring-with-a-tiffany-true-diamond-in-platinum-63594873_996049_ED_M.jpg?&op_usm=1.75,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&',
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
      data={productData}
      ListFooterComponent={() => (
        <View style={{height: theme.buttons.medium + theme.spacing.xs}} />
      )}
      keyExtractor={item => item.key}
      renderItem={({item}) => (
        <ProductFromList2
          image={item.image}
          price={item.price}
          installmentPrice={item.installmentPrice}
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
