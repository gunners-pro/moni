import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <StatusBar />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
