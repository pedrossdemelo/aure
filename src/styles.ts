import {Dimensions, Platform, ScaledSize, StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {theme} from './theme';

export const getHookedStyles = (insets: EdgeInsets, window: ScaledSize) =>
  StyleSheet.create({
    translucentStatusBar: {
      height: insets.top,
      width: '100%',
      backgroundColor: theme.colors.translucent.background,
      top: 0,
      position: 'absolute',
      zIndex: 1,
    },

    mainScrollViewContentContainer: {
      paddingTop: insets.top,
      paddingBottom:
        insets.bottom === 0 ? insets.bottom + 52 : insets.bottom + 47.7,
    },

    productContainer: {
      marginHorizontal: theme.spacing.xs,
      width: (window.width - 16) / 2,
    },
  });

export const v = StyleSheet.create({
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

  shadow: {
    elevation: Platform.OS === 'android' && Platform.Version < 28 ? 1 : 3,
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
  },

  discoverCard: {
    marginHorizontal: theme.spacing.s,
    borderRadius: theme.spacing.s,
  },

  discoverCardsContainer: {
    flexDirection: 'row',
    aspectRatio: 13 / 5,
    marginHorizontal: theme.spacing.s,
  },

  featuredCollectionImage: {
    aspectRatio: 4 / 3,
    marginHorizontal: theme.spacing.m,
    borderRadius: theme.spacing.s,
  },

  selectionDotsContainer: {
    marginTop: 11.4,
    marginBottom: 8.075,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedDot: {
    backgroundColor: theme.colors.foreground,
    width: theme.spacing.xs * 1.5,
    height: theme.spacing.xs * 1.5,
    borderRadius: theme.spacing.xxs * 1.5,
    marginHorizontal: theme.spacing.xxs * 1.5,
  },

  selectionDot: {
    backgroundColor: theme.colors.dots,
    width: theme.spacing.xs,
    height: theme.spacing.xs,
    borderRadius: theme.spacing.xxs,
    marginHorizontal: theme.spacing.xxs * 1.5,
  },

  occasionCard: {
    height: 80,
    marginHorizontal: theme.spacing.s,
    borderRadius: theme.spacing.s,
  },

  productCard: {
    borderRadius: theme.spacing.s,
    aspectRatio: 1.1, // 11 / 10
  },

  horizontalScrollViewContainer: {
    paddingHorizontal: theme.spacing.m - theme.spacing.xs,
  },

  productPricingContainer: {
    marginHorizontal: theme.spacing.xxs,
    marginTop: theme.spacing.xs * 1.5,
    marginBottom: theme.spacing.xs - 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const t = StyleSheet.create({
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

  price: {
    fontFamily: 'Lato-Bold',
    fontSize: theme.fontSize.price,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.price * 1.25,
    marginHorizontal: theme.spacing.xxs,
  },

  paragraph: {
    fontFamily: 'Lato-Regular',
    fontSize: theme.fontSize.paragraph,
    color: theme.colors.textSecondary,
    lineHeight: theme.fontSize.paragraph * 1.2,
  },

  paragraph2: {
    fontFamily: 'Lato-Regular',
    fontSize: theme.fontSize.paragraph2,
    color: theme.colors.textSecondary,
    lineHeight: theme.fontSize.paragraph2 * 1.2,
  },

  installmentPrice: {
    color: theme.colors.textPrimary,
    marginHorizontal: theme.spacing.xxs,
    textAlign: 'right',
    flex: 1,
  },

  titleMargin: {
    marginBottom: theme.spacing.xxs,
    marginHorizontal: theme.spacing.l,
  },

  discoverCardTextAlignment: {
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.xxs,
    textAlign: 'right',
    lineHeight: theme.fontSize.title * 1,
  },

  smallButton: {
    fontFamily: 'Lato-Bold',
    fontSize: theme.fontSize.smallButton,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.smallButton * 1.2,
  },
});
