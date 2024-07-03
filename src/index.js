import {
  AppState,
  BackHandler,
  LogBox,
  ToastAndroid,
  Platform,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import MyStack from './components/MyStack';
const Root = () => {
  LogBox.ignoreAllLogs();
  const appState = useRef(AppState.currentState);
  const doublePressTimeout = useRef(null);
  const [appStateVisible, setAppStateVisible] = useState(false);
  const handleAppStateChange = nextState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextState == 'active'
    ) {
      setAppStateVisible(true);
    }
    appState.current = nextState;
    if (appState.current == 'background') {
    }
  };
  useEffect(() => {
    const unsubscribe = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => unsubscribe.remove();
  }, []);
  useEffect(() => {}, [appStateVisible]);

  async function handleBackButtonClick() {
    if (
      (doublePressTimeout.current &&
        doublePressTimeout.current + 2000 >= Date.now()) ||
      Platform.OS != 'android'
    ) {
      BackHandler.exitApp();
      return true;
    } else {
      ToastAndroid.show('Press again to exit', ToastAndroid.SHORT);
      doublePressTimeout.current = Date.now();
      return true;
    }
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  return <MyStack />;
};

export default Root;
