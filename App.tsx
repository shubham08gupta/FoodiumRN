import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-view';

const App: () => React.ReactNode = () => {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Appbar>
            <Appbar.Content title="Foodium" />
          </Appbar>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
};

export default App;
