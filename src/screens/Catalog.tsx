import React from 'react';
import {
  View,
  Text,
  Platform,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';
import {FilterButton} from '../components/atoms/FilterButton';
import ProductFromList2, {
  ProductFromList,
} from '../components/molecules/Product';
import {getHookedStyles} from '../styles';

import {theme} from '../theme';
import {Placeholder} from './Home';
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
  for (let i = 0; i < 2000; i++) {
    let n = i + 1;
    productData.push({
      brand: 'Marca ' + n,
      name: 'Anel feito com' + makeid(8),
      price: makeid(8),
      installmentPrice: makeid(4),
      image:
        Placeholder,
    });
  }
  return;
}

fknLol();

function Catalog() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyles(insets, window);
  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={[hs.mainScrollViewContentContainer, {paddingBottom: 200}]}
          style={{paddingHorizontal: theme.spacing.xs}}
          numColumns={2}
          data={productData}
          initialNumToRender={8}
          removeClippedSubviews
          windowSize={11}
          maxToRenderPerBatch={8}
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
      </View>
      <FilterButton />
    </>
  );
}

export default React.memo(Catalog);
