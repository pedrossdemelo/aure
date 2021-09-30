import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {t, v} from '../../styles';
import {Product} from './Product';

export function ForYouSection() {
  function ForYouSectionHeader() {
    return <Text style={[t.title, t.titleMargin]}>Joias para você</Text>;
  }

  function ProductListHorizontalScrollView() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode={'never'}
        contentContainerStyle={[v.horizontalScrollViewContainer]}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ScrollView>
    );
  }

  return (
    <View style={[v.sectionContainer]}>
      <ForYouSectionHeader />
      <ProductListHorizontalScrollView />
    </View>
  );
}
