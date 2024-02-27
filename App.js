import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import Tabs from './navigation/Tabs';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsReady(true);
    }

    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
