import React from 'react';
import {Text, View} from 'react-native';
import {t, v} from '../../styles';
import {theme} from '../../theme';
import {ImageTouchableDescription} from '../atoms/ImageTouchableDescription';

export function OccasionSection() {
  function OccasionHeader() {
    return (
      <Text style={[t.title, t.titleMargin]}>Joias para toda ocasião</Text>
    );
  }

  function OccasionCard() {
    return (
      <ImageTouchableDescription
        title={'Formatura'}
        style={[v.occasionCard]}
        onPress={() => {}}
        flex={1}
      />
    );
  }

  return (
    <View style={[v.sectionContainer]}>
      <OccasionHeader />
      <View
        style={{
          marginBottom: theme.spacing.s,
          flexDirection: 'row',
          marginHorizontal: theme.spacing.s,
        }}>
        <OccasionCard />
        <OccasionCard />
      </View>
      <View
        style={{
          marginTop: theme.spacing.s,
          flexDirection: 'row',
          marginHorizontal: theme.spacing.s,
        }}>
        <OccasionCard />
        <OccasionCard />
      </View>
    </View>
  );
}
