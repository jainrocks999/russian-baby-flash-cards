import {Platform} from 'react-native';
export const Addsid = {
  ...Platform.select({
    android: {
      BANNER: 'ca-app-pub-3339897183017333/4802686781',
      Interstitial: 'ca-app-pub-3339897183017333/3325953589',
    },
    ios: {
      BANNER: 'ca-app-pub-3339897183017333/2767550380',
      Interstitial: 'ca-app-pub-3339897183017333/6038110373',
    },
  }),
};
