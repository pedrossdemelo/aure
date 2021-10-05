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

  function OccasionCard({title, image}) {
    return (
      <ImageTouchableDescription
        title={title}
        style={[v.occasionCard]}
        onPress={() => {}}
        flex={1}
        source={image}
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
        <OccasionCard
          title="Formatura"
          image="https://res.cloudinary.com/aure/image/upload/v1633439175/Home%20Thumbnails/Men_aeng9h.webp"
        />
        <OccasionCard
          title="Presentes"
          image="https://res.cloudinary.com/aure/image/upload/v1633442181/Home%20Thumbnails/Gift_ivp5tg.webp"
        />
      </View>
      <View
        style={{
          marginTop: theme.spacing.s,
          flexDirection: 'row',
          marginHorizontal: theme.spacing.s,
        }}>
        <OccasionCard
          title="Nascimento"
          image="https://res.cloudinary.com/aure/image/upload/v1633437695/Home%20Thumbnails/baby_qt2z55.webp"
        />
        <OccasionCard
          title="Bodas"
          image="https://res.cloudinary.com/aure/image/upload/v1633437695/Home%20Thumbnails/Engagement_yw4rwo.webp"
        />
      </View>
    </View>
  );
}
