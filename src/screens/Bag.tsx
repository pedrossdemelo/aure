import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';

import {theme} from '../theme';

import {MainScrollView, t, AndroidFeedbackButton} from './Home';

function Bag() {
  return (
    <MainScrollView>
      <View
        style={{
          borderColor: theme.colors.foreground,
          borderWidth: 0.2,
          height: 188,
          padding: theme.spacing.s,
          backgroundColor: 'grey',
        }}>
        <View>
          <FastImage source={{uri: ''}} style={[{margin: theme.spacing.s, borderRadius: theme.spacing.s}]}>
            <AndroidFeedbackButton />
          </FastImage>
        </View>
      </View>
    </MainScrollView>
  );
}

export default React.memo(Bag);
