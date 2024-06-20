import {Platform} from 'react-native';
const productSkus = Platform.select({
  android: ['russina_in_ads_product'],
  ios: ['com.eflashapps.russianfree.proupgrade'],
});
export const constants = {
  productSkus,
  fun: (fun = () => {
    console.log(this.productSkus);
  }),
};
