import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync(); // Prevent auto-hiding

      // Your app initialization logic, e.g.,
      // - Preload fonts
      // - Make API calls
      // - Perform any other background tasks
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate some loading time

      setIsReady(true);
    }

    prepare();
  }, []);

  if (!isReady) {
    return null; // Return nothing while app is loading
  }

  // Call SplashScreen.hideAsync() when your app is ready to display content
  SplashScreen.hideAsync(); // Hide the splash screen

  return (
    <Text>Hello</Text>
  );
}
