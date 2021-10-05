import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {sample} from '../../assets/sample';
import {t, v} from '../../styles';
import {theme} from '../../theme';
import {Product} from './Product';

interface ProductSectionProps {
  title: string;
}

export function ProductSection({title}: ProductSectionProps) {
  function ProductSectionHeader() {
    return <Text style={[t.title, t.titleMargin]}>{title}</Text>;
  }

  function ProductListHorizontalScrollView() {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode={'never'}
        contentContainerStyle={v.horizontalScrollViewContainer}
        initialNumToRender={6}
        maxToRenderPerBatch={36}
        data={sample}
        renderItem={({item}) => (
          <Product
            image={item.thumbnail}
            price={item.price}
            name={item.name}
            brand={item.brand}
          />
        )}
      />
    );
  }

  return (
    <View style={[v.sectionContainer]}>
      <ProductSectionHeader />
      <ProductListHorizontalScrollView />
    </View>
  );
}
