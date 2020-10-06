/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import React, { Component } from 'react';

const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    accent: '#00838F',
    background: '#F3F3F3',
  },
};

const darkTheme = {
  ...DarkTheme,
  dark: true,
  mode: 'adaptive',
  colors: {
    ...DarkTheme.colors,
    primary: '#002022',
    accent: '#00838F',
    background: '#001719',
    surface: '#001719',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={lightTheme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
