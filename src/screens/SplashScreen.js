import {View, Text, Image, Dimensions, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, StackActions} from '@react-navigation/native';

const SplashScreen = () => {
  const {height, width} = Dimensions.get('window');

  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'home'}]});
    }, 2000);
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#73cbea'}}>
      <Image
        style={{height: '100%', width: '100%'}}
        resizeMode="stretch"
        source={require('../../Assets4/splash.jpg')}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
