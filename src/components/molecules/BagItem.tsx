import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import {ImageTouchableFeedback} from '../components/atoms/ImageTouchableFeedback';
import {t, v} from '../../styles';
import {theme} from '../../theme';
import {Placeholder} from '../../screens/Home';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {SmallButton} from '../atoms/SmallButton';
import {CounterButton} from '../atoms/CounterButton';
import Svg, {Path} from 'react-native-svg';

export function BagItem() {
  return (
    <View>
      <Text>a</Text>
    </View>
  );
}
