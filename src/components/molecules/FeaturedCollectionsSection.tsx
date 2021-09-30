import React from 'react';
import {Text, View} from 'react-native';
import {Placeholder} from '../../screens/Home';
import {t, v} from '../../styles';
import {ImageTouchableFeedback} from '../atoms/ImageTouchableFeedback';

export function FeaturedCollectionsSection() {
  function FeaturedCollectionsHeader() {
    return <Text style={[t.title, t.titleMargin]}>Coleções em destaque</Text>;
  }

  function FeaturedCollectionImage() {
    return (
      <ImageTouchableFeedback
        shadow={[v.shadow]}
        source={Placeholder}
        style={[v.featuredCollectionImage, v.shadow]}
        onPress={() => {}}
      />
    );
  }

  function FeaturedCollectionSelectionDots() {
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

  function FeaturedCollectionDescription() {
    return (
      <Text style={[t.title2, {textAlign: 'center'}]} numberOfLines={3}>
        Vivara{'\n'}
        <Text style={[t.paragraph]}>Coleção Vivara</Text>
      </Text>
    );
  }

  return (
    <View style={[v.sectionContainer]}>
      <FeaturedCollectionsHeader />
      <FeaturedCollectionImage />
      <FeaturedCollectionSelectionDots />
      <FeaturedCollectionDescription />
    </View>
  );
}
