const palette = {
  primary: {
    Isabelline: '#F8F1EA',
    Linen: '#F2E6D8',
    Almond: '#EEDFCC',
    DesertSand: '#E0C8B0',
    Tan: '#D2B095',
    Beaver: '#A68C7A',
    AlmondFrost: '#90786C',
    DarkSienna: '#321A12',
  },

  secondary: {
    RawSienna: '#D68F61',
    Coral: '#FF8862',
    Tumbleweed: '#F6B591',
    MandysPink: '#F1CBA9',
    PeachPuff: '#F0D5BB',
    Peach: '#F9DDA8',
    AppleGreen: '#8DB13F',
    BeauBlue: '#BCD7F0',
  },

  translucent: {
    Isabelline: 'rgba(248, 241, 234, 0.9)',
  },
};

export const theme = {
  colors: {
    background: palette.primary.Isabelline,
    foreground: palette.primary.DarkSienna,
    textPrimary: palette.primary.DarkSienna,
    textSecondary: palette.primary.Beaver,
    touchablePrimary: palette.primary.Linen,
    touchableSecondary: palette.secondary.PeachPuff,
    touchableTertiary: palette.primary.DarkSienna,
    notification: palette.secondary.Coral,
    discount: palette.secondary.Coral,
    buttonRipple: {
      add: palette.secondary.PeachPuff,
      remove: palette.secondary.BeauBlue,
    },
    translucent: {
      background: palette.translucent.Isabelline,
    },
    shadow: palette.secondary.RawSienna,
    dots: palette.primary.Tan,
  },

  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },

  fontSize: {
    header: 25,
    title: 19,
    title2: 15,
    paragraph: 13,
    paragraph2: 11,
    price: 14,
    smallButton: 14.5,
    mediumButton: 16,
  },

  buttonSize: {
    small: 32,
    medium: 38,
    large: 44,
    invisible: 42,
  },

  barSize: {
    header: 46,
    search: 52,
  },
};
