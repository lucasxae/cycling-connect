import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Navigation from './src/navigation';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider} from './src/context/AuthContext';
import Toast from 'react-native-toast-message';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

function App() {
  const colorScheme = useColorScheme();

  return (
    <>
      <AuthProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <ThemeProvider theme={theme}>
            <SafeAreaProvider>
              <BottomSheetModalProvider>
                <StatusBar />
                <Navigation colorScheme={colorScheme} />
              </BottomSheetModalProvider>
            </SafeAreaProvider>
          </ThemeProvider>
        </GestureHandlerRootView>
      </AuthProvider>
      <Toast />
    </>
  );
}

export default App;
