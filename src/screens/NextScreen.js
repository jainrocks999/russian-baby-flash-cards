import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {height, width} from '../components/Diemenstions';
import CatagotyData from '../components/CatagotyData';
import {StackActions} from '@react-navigation/native';
import {addCat} from '../reduxToolkit/Slice5';
import {addData} from '../reduxToolkit/Slice';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {addCatNext} from '../reduxToolkit/Slice7';
var SQLite = require('react-native-sqlite-storage');
const db = SQLite.openDatabase({
  name: 'eFlashRussian.db',
  createFromLocation: 1,
});
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import {Addsid} from './ads';
const NextScreen = ({route}) => {
  const navigation = useNavigation();
  const item = useSelector(state => state?.catdata);
  console.log('this is item', item);
  const disapatch = useDispatch();
  const cat = useSelector(state => state.cat);
  const wr = useSelector(state => state.question);
  console.log(cat);
  const muted = useSelector(state => state.sound);
  const getData = (cat, id) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM tbl_items WHERE Category=? ',
        [cat],
        (tx, results) => {
          console.log(' item query Query completed');
          let arr = [];
          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            arr.push(row);
          }
          disapatch(addData(arr));
          disapatch(addCatNext({items: item.items, id: parseInt(id) + 1}));
          if (cat != 'link') {
            navigation.navigate(wr == 1 ? 'question' : 'details', {
              page: true,
              item: {items: item.items, id: parseInt(id) + 1},
            });
          } else {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'home',
                },
              ],
            });
          }
        },
        err => {
          console.log(err);
        },
      );
    });
    console.log(cat, id);
  };

  const [mute, setMut] = useState(muted);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#73cbea'}}>
      <ImageBackground
        style={{flex: 1}}
        resizeMode="stretch"
        source={require('../../Assets4/setting_screen.png')}>
        <Header onPress2={() => setMut(!mute)} mute={mute} />
        <View
          style={{
            top: '70%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '33%',
            }}>
            <TouchableOpacity
              style={{height: hp('9%'), width: hp('9%')}}
              onPress={() => {
                navigation.dispatch(StackActions.replace('details'));
              }}>
              <Image
                style={{height: '100%', width: '100%'}}
                source={require('../../Assets4/btnrepeat_normal.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: hp('3%'),
                fontWeight: 'bold',
                color: 'red',
                marginTop: 5,
                elevation: 5,
              }}>
              Repeat
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '33%',
            }}>
            <TouchableOpacity
              onPress={() =>
                getData(item.items[item.id - 1]?.Category, parseInt(item.id))
              }
              style={{height: hp('9%'), width: hp('9%')}}>
              <Image
                style={{height: '100%', width: '100%'}}
                source={require('../../Assets4/btnnextcatg_normal.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: hp('3%'),
                fontWeight: 'bold',
                color: 'red',
                marginTop: 5,
                elevation: 5,
              }}>
              Next
            </Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              width: '33%',
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.reset({index: 0, routes: [{name: 'home'}]})
              }
              style={{height: hp('9%'), width: hp('9%')}}>
              <Image
                style={{height: '100%', width: '100%'}}
                source={require('../../Assets4/btnhome_normal.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: hp('3%'),
                fontWeight: 'bold',
                color: 'red',
                marginTop: '5%',
                elevation: 5,
              }}>
              Home
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',

            alignItems: 'center',

            bottom: 0,
          }}>
          <BannerAd
            unitId={Addsid.BANNER}
            sizes={[BannerAdSize.FULL_BANNER]}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default NextScreen;
