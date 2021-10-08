import React from 'react';
import {Text, View} from 'react-native';
import {Placeholder} from '../../screens/Home';
import {t, v} from '../../styles';
import {ImageTouchableFeedback} from '../atoms/base/ImageTouchableFeedback';

export function UserHeader() {
  function UserGreetings() {
    return (
      <Text style={[t.title, {flex: 1}]}>
        Bom dia, {'\n'}
        <Text style={[t.header]}>Aurelia Stevens</Text>
      </Text>
    );
  }

  function UserProfilePic() {
    return (
      <ImageTouchableFeedback
        style={[v.userAvatar]}
        source={
          'https://res.cloudinary.com/aure/image/upload/v1633442859/Home%20Thumbnails/Avatar_exewgb.webp'
        }
        onPress={() => {}}
      />
    );
  }

  return (
    <View style={[v.userHeaderContainer]}>
      <UserGreetings />
      <UserProfilePic />
    </View>
  );
}
