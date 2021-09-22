import React from 'react';
import {View, Text, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';

import {theme} from '../theme';

function Catalog() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Catalogo</Text>
    </View>
  );
}

export default React.memo(Catalog);
