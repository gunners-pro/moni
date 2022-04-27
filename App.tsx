import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import { Login } from './src/screens/Login';
import theme from './src/theme';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
