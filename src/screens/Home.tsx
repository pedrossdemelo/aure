import React from 'react';

import {
  Text,
  View,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  Platform,
  ScaledSize,
  ColorValue,
  TouchableNativeFeedbackProps,
  ViewStyle,
} from 'react-native';

import FastImage from 'react-native-fast-image';

import {TouchableNativeFeedback} from 'react-native-gesture-handler';

import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

import AureLogo from '../assets/icons/AureLogo';

import {theme} from '../theme';

const getHookedStyleSheet = (insets: EdgeInsets, window: ScaledSize) =>
  StyleSheet.create({
    translucentStatusBar: {
      height: insets.top,
      width: '100%',
      backgroundColor: theme.colors.translucent.background,
      top: 0,
      position: 'absolute',
      zIndex: 1,
    },

    mainScrollView: {
      backgroundColor: theme.colors.background,
      paddingTop: insets.top,
      flex: 1,
    },
  });

const v = StyleSheet.create({
  logoContainer: {
    marginVertical: theme.spacing.m,
    alignItems: 'center',
  },

  userHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.l,
  },

  userAvatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: theme.spacing.m,
  },

  sectionContainer: {
    marginVertical: theme.spacing.s,
  },

  discoverCard: {
    flex: 1,
    marginHorizontal: theme.spacing.s,
    borderRadius: theme.spacing.s,
    elevation: Platform.Version < 28 ? 1 : 3,
    shadowColor: theme.colors.shadow,
  },

  discoverCardsContainer: {
    flex: 1,
    flexDirection: 'row',
    aspectRatio: 13 / 5,
    marginHorizontal: 8,
  },
});

const t = StyleSheet.create({
  header: {
    fontFamily: 'Poppins-Medium',
    fontSize: theme.fontSize.header,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.header * 1.25,
  },

  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: theme.fontSize.title,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.title * 1.5,
  },

  title2: {
    fontFamily: 'Poppins-Medium',
    fontSize: theme.fontSize.title2,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.title2 * 1.25,
  },

  paragraph: {
    fontFamily: 'Lato-Regular',
    fontSize: theme.fontSize.paragraph,
    color: theme.colors.textSecondary,
    lineHeight: theme.fontSize.paragraph * 1.2,
  },

  titleMargin: {
    marginVertical: theme.spacing.xxs,
    marginHorizontal: theme.spacing.l,
  },

  discoverCardTextAlignment: {
    marginHorizontal: theme.spacing.s,
    textAlign: 'right',
    marginVertical: theme.spacing.xxs,
  },
});

const Placeholder =
  'http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg';
interface AndroidFeedbackButtonProps extends TouchableNativeFeedbackProps {
  children?: JSX.Element[] | JSX.Element;
  style?: ViewStyle;
  styleInternal?: ViewStyle;
  rippleColor: ColorValue;
}
interface Children {
  children?: JSX.Element[] | JSX.Element;
}

function AndroidFeedbackButton(props: AndroidFeedbackButtonProps) {
  return (
    <View style={[{overflow: 'hidden'}, props.style]}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(props.rippleColor, false)}
        useForeground={false}
        onPress={props.onPress}
        onLongPress={props.onLongPress}>
        <View style={[props.styleInternal, {height: '100%'}]}>
          {props.children}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

function TranslucentStatusBar() {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyleSheet(insets, window);
  return <View style={[hs.translucentStatusBar]} />;
}

function MainScrollView({children}: Children) {
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const hs = getHookedStyleSheet(insets, window);
  return (
    <ScrollView
      style={[hs.mainScrollView]}
      showsVerticalScrollIndicator={false}
      overScrollMode={Platform.Version < 31 ? 'never' : 'always'}>
      {children}
    </ScrollView>
  );
}

function LogoHeader() {
  return (
    <View style={[v.logoContainer]}>
      <AureLogo />
    </View>
  );
}

function UserHeader() {
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
      <FastImage
        source={{
          uri: Placeholder,
        }}
        style={[v.userAvatar]}>
        <AndroidFeedbackButton
          rippleColor={theme.colors.background}
          onPress={() => {}}
        />
      </FastImage>
    );
  }

  return (
    <View style={[v.userHeaderContainer]}>
      <UserGreetings />
      <UserProfilePic />
    </View>
  );
}

function DiscoverSection() {
  const window = useWindowDimensions();

  function DiscoverHeader() {
    return <Text style={[t.title, t.titleMargin]}>Conheça</Text>;
  }

  function DiscoverCards() {
    return (
      <FastImage
        source={{
          uri: Placeholder,
        }}
        style={[v.discoverCard]}>
        <AndroidFeedbackButton
          rippleColor={theme.colors.background}
          onPress={() => {}}
          styleInternal={{
            alignItems: 'flex-end',
            flexDirection: 'row-reverse',
          }}>
          <Text
            style={[
              t.title,
              t.discoverCardTextAlignment,
              {lineHeight: theme.fontSize.title * 1},
            ]}
            numberOfLines={1}>
            Alianças
          </Text>
        </AndroidFeedbackButton>
      </FastImage>
    );
  }

  return (
    <View style={v.sectionContainer}>
      <DiscoverHeader />
      <View style={v.discoverCardsContainer}>
        <DiscoverCards />
        <DiscoverCards />
        <DiscoverCards />
      </View>
    </View>
  );
}

function FeaturedCollectionsSection() {
  return null;
}

function OccasionSection() {
  return null;
}

function FeaturedBrandsSection() {
  return null;
}

function ForYouSection() {
  return null;
}

function DiscountsSection() {
  return null;
}

function LastSeenSection() {
  return null;
}

function Home() {
  return (
    <>
      <TranslucentStatusBar />
      <MainScrollView>
        <LogoHeader />
        <UserHeader />
        <DiscoverSection />
        <FeaturedCollectionsSection />
        <OccasionSection />
        <FeaturedBrandsSection />
        <ForYouSection />
        <DiscountsSection />
        <LastSeenSection />
      </MainScrollView>
    </>
  );
}

export default React.memo(Home);
