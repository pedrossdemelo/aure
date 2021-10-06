import React from 'react';
import {View} from 'react-native';
import {FilterButton} from '../components/atoms/FilterButton';
import {TranslucentHeader} from '../components/atoms/TransluscentHeader';
import {ProductFlatList} from './Catalog';

function Favorites() {
  return (
    <>
      <TranslucentHeader title={'Favoritos'} />
      <View style={{flex: 1}}>
        <ProductFlatList />
      </View>
      <FilterButton />
    </>
  );
}

export default React.memo(Favorites);
