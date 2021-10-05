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

  function DiscoverCard({title, image}) {
    return (
      <ImageTouchableDescription
        source={image}
        title={title}
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
        {window.width > 367 ? (
          <DiscoverCard
            title="Alianças"
            image={
              'https://res.cloudinary.com/aure/image/upload/v1633437695/Home%20Thumbnails/Engagement_yw4rwo.webp'
            }
          />
        ) : null}
        <DiscoverCard
          title="Homem"
          image={
            'https://res.cloudinary.com/aure/image/upload/v1633439175/Home%20Thumbnails/Men_aeng9h.webp'
          }
        />
        <DiscoverCard
          title="Mulher"
          image={
            'https://res.cloudinary.com/aure/image/upload/v1633437696/Home%20Thumbnails/Women_im8xan.webp'
          }
        />
      </View>
    </View>
  );
}
