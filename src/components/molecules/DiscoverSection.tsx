import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import {Text} from 'react-native';
import {t, v} from '../../styles';
import {theme} from '../../theme';
import {ImageTouchableDescription} from '../atoms/ImageTouchableDescription';

export function DiscoverSection() {
  const window = useWindowDimensions();

  function DiscoverHeader() {
    return <Text style={[t.title, t.titleMargin]}>Conheça</Text>;
  }

  function DiscoverCards() {
    return (
      <ImageTouchableDescription
        title={'Alianças'}
        style={[v.discoverCard]}
        pressColor={theme.colors.background}
        onPress={() => {}}
        flex={1}
      />
    );
  }

  return (
    <View style={v.sectionContainer}>
      <DiscoverHeader />
      <View style={v.discoverCardsContainer}>
        {window.width > 367 ? <DiscoverCards /> : null}
        <DiscoverCards />
        <DiscoverCards />
      </View>
    </View>
  );
}
