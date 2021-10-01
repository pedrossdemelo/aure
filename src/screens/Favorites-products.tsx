import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AureLogo from '../assets/icons/AureLogo';
import {FilterButton} from '../components/atoms/FilterButton';
import {theme} from '../theme';

function Favorites() {
  return (
    <>
      <View style={{flex: 1}} />
      <FilterButton />
    </>
  );
}

export default React.memo(Favorites);
