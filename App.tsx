import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation/Navigation';
import { ScreenContext } from './contexts/ScreenContext';
import AppContent from './components/containers/AppContent';
import appConetentRef from './references/appContentRef';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [currentScreen, setCurrentScreen] = useState<CurrentScreen>('Auth');

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ScreenContext.Provider value={{ currentScreen, setCurrentScreen }} >
          <AppContent
            ref={appConetentRef}
            signIn={() => setCurrentScreen("Main")}
            signOut={() => setCurrentScreen("Auth")}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </AppContent>
        </ScreenContext.Provider>
      </SafeAreaProvider>
    );
  }
}
