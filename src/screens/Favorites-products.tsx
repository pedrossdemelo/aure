import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AureLogo from '../assets/icons/AureLogo';
import {FilterButton} from '../components/atoms/FilterButton';
import {TranslucentHeader} from '../components/atoms/TransluscentHeader';
import {theme} from '../theme';
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
