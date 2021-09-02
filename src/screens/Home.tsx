import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {useSafeAreaInsets, SafeAreaView} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';
// import BAP_Home from './src/assets/icons/BAP_Home';
// import BAP_Catalog from './src/assets/icons/BAP_Catalog';
// import BAP_Favorites from './src/assets/icons/BAP_Favorites';
// import BAP_Bag from './src/assets/icons/BAP_Bag';

const primaryGradient = {
  100: '#F8F1EA',
  200: '#F2E6D8',
  300: '#EEDFCC',
  400: '#E0C8B0',
  500: '#D2B095',
  600: '#A68C7A',
  700: '#90786C',
  800: '#321A12',
};

const AureHeader = () => {
  return (
    <View
      style={{
        marginVertical: 16,
        alignItems: 'center',
      }}>
      <AureLogo />
    </View>
  );
};

const UserHeader = () => {
  const UserGreetings = () => {
    return (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19.2,
          color: primaryGradient[800],
          lineHeight: 19.2 * 1.5,
          flex: 1,
        }}>
        Bom dia,{'\n'}
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 25.6,
            color: primaryGradient[800],
            lineHeight: 25.6 * 1.25,
          }}>
          Aurelia Stevens
        </Text>
      </Text>
    );
  };

  const UserProfilePic = () => {
    return (
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          backgroundColor: primaryGradient[200],
          marginLeft: 16,
        }}
      />
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        width: '100%',
      }}>
      <UserGreetings />
      <UserProfilePic />
    </View>
  );
};

const Discover = () => {
  const DiscoverHeader = () => {
    return (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19.2,
          color: primaryGradient[800],
          lineHeight: 19.2 * 1.5,
          flex: 1,
          marginBottom: 4,
          marginHorizontal: 8,
        }}>
        Conheça
      </Text>
    );
  };
  return <View style={{}} />;
};
const FeaturedCollections = () => {
  const FeaturedCollectionsHeader = () => {
    return (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 19.2,
          color: primaryGradient[800],
          lineHeight: 19.2 * 1.5,
          flex: 1,
          marginBottom: 4,
          marginHorizontal: 8,
        }}>
        Coleções em destaque
      </Text>
    );
  };

  const FeaturedCollectionsImage = () => {
    return (
      <View
        style={{
          flex: 1,
          aspectRatio: 4 / 3,
          backgroundColor: 'white',
          borderRadius: 8,
          elevation: 2,
          shadowColor: '#D68F61',
        }}
      />
    );
  };

  const FeaturedCollectionsSelectionDots = () => {
    return (
      <View
        style={{
          marginTop: 10.4,
          marginBottom: 5.2,
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: primaryGradient[800],
            width: 6,
            height: 6,
            borderRadius: 3,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
        <View
          style={{
            backgroundColor: primaryGradient[500],
            width: 4,
            height: 4,
            borderRadius: 2,
            marginHorizontal: 3,
          }}
        />
      </View>
    );
  };

  const CollectionText = () => {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 15,
            color: primaryGradient[800],
            lineHeight: 16 * 1.5,
            flex: 1,
            textAlign: 'center',
          }}>
          Vivara{'\n'}
          <Text
            style={{
              fontFamily: 'Lato-Regular',
              fontSize: 14,
              color: primaryGradient[700],
              lineHeight: 14 * 1.25,
              flex: 1,
            }}>
            Coleção Vivara
          </Text>
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        marginTop: 16,
        marginHorizontal: 16,
        marginBottom: 8,
      }}>
      <FeaturedCollectionsHeader />
      <FeaturedCollectionsImage />
      <FeaturedCollectionsSelectionDots />
      <CollectionText />
    </View>
  );
};

export default function Home() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      style={{
        flex: 1,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        backgroundColor: primaryGradient[100],
        marginTop: insets.top,
        marginBottom: insets.bottom + 52 - 16,
      }}>
      <AureHeader />
      <UserHeader />
      <FeaturedCollections />
    </ScrollView>
  );
}
