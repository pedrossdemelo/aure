import React from 'react';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import AureLogo from '../assets/icons/AureLogo';
import {FilterButton} from '../components/atoms/FilterButton';
import {MediumButton} from '../components/atoms/MediumButton';
import {TranslucentHeader} from '../components/atoms/TransluscentHeader';
import {theme} from '../theme';
import {ProductFlatList} from './Catalog';

interface ProductPageProps {
  brand: string;
  collection: string;
  price: string;
  discountPrice: string;
}

const v = StyleSheet.create({
  productPageHeaderTextAlignment: {
    marginHorizontal: theme.spacing.m,
    textAlign: 'center',
  },
});

function Favorites() {
  return (
    <>
      {/* <TranslucentHeader title={'Favoritos'} />
      <View style={{flex: 1}}>
        <ProductFlatList />
      </View>
      <FilterButton /> */}
      <View
        style={{
          overflow: 'hidden',
          borderRadius: theme.spacing.l,
          flex: 1,
          marginTop: useSafeAreaInsets().top,
        }}>
        <ScrollView
          style={{flex: 1, backgroundColor: 'white'}}
          contentContainerStyle={{marginTop: theme.spacing.s}}>
          {/* Product Info Section */}
          <View>
            {/* Brand */}
            <Text style={v.productPageHeaderTextAlignment}>Hi</Text>
            {/* Collection */}
            <Text style={v.productPageHeaderTextAlignment}>Hi</Text>
            {/* Name */}
            <Text style={v.productPageHeaderTextAlignment}>Hi</Text>
            {/* Price Info Section */}
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              {/* Price */}
              <Text>Hi</Text>
              {/* DiscountPrice */}
              <Text>Hi</Text>
              {/* InstallmentPrice */}
              <Text>Hi</Text>
            </View>
          </View>
          {/* Size Selection Section */}
          <View>
            {/* Select Size */}
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <View
                style={{
                  height: 2,
                  flex: 1,
                  backgroundColor: 'black',
                  marginHorizontal: theme.spacing.m,
                }}
              />
              <Text>HI</Text>
              <View
                style={{
                  height: 2,
                  flex: 1,
                  backgroundColor: 'black',
                  marginHorizontal: theme.spacing.m,
                }}
              />
            </View>
            {/* Size selection buttons */}
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  borderRadius: 999,
                  height: 32,
                  width: 32,
                  borderColor: 'black',
                  borderWidth: 1.2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Hi</Text>
              </View>
              <View
                style={{
                  borderRadius: 999,
                  height: 32,
                  width: 32,
                  borderColor: 'black',
                  borderWidth: 1.2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Hi</Text>
              </View>
              <View
                style={{
                  borderRadius: 999,
                  height: 32,
                  width: 32,
                  borderColor: 'black',
                  borderWidth: 1.2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Hi</Text>
              </View>
            </View>
          </View>
          <View style={{marginHorizontal: theme.spacing.m}}>
            <MediumButton onPress={() => {}} color={theme.colors.foreground} textColor={theme.colors.background} title={'Adicionar à Bolsa'}/>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default React.memo(Favorites);
