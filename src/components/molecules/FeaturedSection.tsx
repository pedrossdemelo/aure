import React from 'react';
import {Text, View} from 'react-native';
import {t, v} from '../../styles';
import {theme} from '../../theme';
import {ImageTouchableFeedback} from '../atoms/ImageTouchableFeedback';

export function FeaturedSection({title, image, title2, description}) {
  function FeaturedSectionHeader() {
    return <Text style={[t.title, t.titleMargin]}>{title}</Text>;
  }

  function FeaturedSectionImage() {
    return (
      <ImageTouchableFeedback
        shadow={[v.shadow]}
        source={image}
        style={[v.featuredCollectionImage]}
        onPress={() => {}}
      />
    );
  }

  function FeaturedSelectionDots() {
    return (
      <View style={[v.selectionDotsContainer]}>
        <View style={[v.selectedDot]} />
        <View style={[v.selectionDot]} />
        <View style={[v.selectionDot]} />
        <View style={[v.selectionDot]} />
        <View style={[v.selectionDot]} />
      </View>
    );
  }

  function FeaturedSectionDescription() {
    return (
      <Text
        style={[
          t.title2,
          {textAlign: 'center', flex: 1, marginHorizontal: theme.spacing.m},
        ]}
        numberOfLines={3}>
        {title2}
        {'\n'}
        <Text style={[t.paragraph]}>{description}</Text>
      </Text>
    );
  }

  return (
    <View style={[v.sectionContainer]}>
      <FeaturedSectionHeader />
      <FeaturedSectionImage />
      <FeaturedSelectionDots />
      <FeaturedSectionDescription />
    </View>
  );
}
