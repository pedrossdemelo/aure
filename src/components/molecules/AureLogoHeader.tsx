import React from 'react';
import {View} from 'react-native';
import AureLogo from '../../assets/icons/AureLogo';
import {v} from '../../styles';

export function AureLogoHeader() {
  return (
    <View style={[v.logoContainer]}>
      <AureLogo />
    </View>
  );
}
