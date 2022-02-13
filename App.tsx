import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Home} from './src/screens/Home';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <Home />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
