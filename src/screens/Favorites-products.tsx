import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';

import {theme} from '../theme';

function Favorites() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Favoritos</Text>
    </View>
  );
}

export default React.memo(Favorites);
