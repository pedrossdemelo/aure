import {Platform, ScaledSize, StyleSheet} from 'react-native';
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
      width: (window.width - 24) / 2,
    },
  });

export const v = StyleSheet.create({
  // Component style for general purpose
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

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  smallHitSlop: {
    bottom: theme.spacing.s,
    top: theme.spacing.s,
    left: theme.spacing.s,
    right: theme.spacing.s,
  },
  // Component styles for BagItem.tsx
  bagItemLineSeparator: {
    height: theme.spacing.xxs,
    backgroundColor: theme.colors.touchablePrimary,
    marginHorizontal: theme.spacing.m,
    borderRadius: theme.spacing.xxs / 2,
  },

  priceAndCounterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bagItemPrice: {
    margin: theme.spacing.s,
    fontSize: theme.fontSize.price,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.price * 1.2,
    fontFamily: 'Lato-Bold',
    marginBottom: theme.spacing.xs + theme.spacing.s + 0.5,
  },

  bagItemButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bagItemRightButtonsContainer: {
    flexDirection: 'row',
    margin: theme.spacing.xs,
  },
  // Component styles for the home screen
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
    marginHorizontal: theme.spacing.s,
    borderRadius: theme.spacing.s,
  },

  discoverCardsContainer: {
    flexDirection: 'row',
    aspectRatio: 13 / 5,
    marginHorizontal: theme.spacing.s,
  },

  imageTouchableAlignmentRight: {
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
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
  //Component styles for CounterButton
  counterButtonContainer: {
    padding: theme.spacing.s,
    flexDirection: 'row',
    alignItems: 'center',
  },

  absoluteFillContainerCenter: {
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
  },

  counterButtonPill: {
    marginHorizontal: theme.spacing.s,
    borderRadius: 999,
    flex: 1,
    backgroundColor: theme.colors.touchablePrimary,
  },
  //Component styles for PricePreview.tsx
  pricePreviewContainer: {
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.m - 2,
    paddingBottom: theme.spacing.m - 6,
    borderBottomWidth: theme.spacing.xxs,
    borderBottomColor: theme.colors.touchablePrimary,
  },

  pricePreviewSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  titleMargin: {
    marginBottom: theme.spacing.xxs,
    marginHorizontal: theme.spacing.l,
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

  imageTouchableTextAlignmentRight: {
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.xxs,
    textAlign: 'right',
    lineHeight: theme.fontSize.title * 1,
  },

  smallButton: {
    fontFamily: 'Lato-SemiBold',
    fontSize: theme.fontSize.smallButton,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.smallButton * 1.2,
  },

  mediumButton: {
    fontFamily: 'Poppins-Medium',
    fontSize: theme.fontSize.mediumButton,
    color: theme.colors.textPrimary,
    lineHeight: theme.fontSize.mediumButton * 1.5,
  },
});
