import React from 'react';
import {Text, View} from 'react-native';
import {Placeholder} from '../../screens/Home';
import {t, v} from '../../styles';
import {ImageTouchableFeedback} from '../atoms/ImageTouchableFeedback';

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
        source={Placeholder}
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
