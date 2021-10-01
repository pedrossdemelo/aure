import React from 'react';
import {View, Text, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';
import {FilterButton} from '../components/atoms/FilterButton';

import {theme} from '../theme';

function Catalog() {
  return (
    <>
      <View style={{flex: 1}} />
      <FilterButton />
    </>
  );
}

export default React.memo(Catalog);
