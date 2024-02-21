import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export const heightPercentageToDP = percent => {
  return (height * percent) / 100;
};
export const widthPercentageToDP = percent => {
  return (width * percent) / 100;
};
