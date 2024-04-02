import React from 'react';
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthProvider} from './context/AuthContext';

function App() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <StatusBar />
            <Navigation colorScheme={colorScheme} />
          </SafeAreaProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}

export default App;
