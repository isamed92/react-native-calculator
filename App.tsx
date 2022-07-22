import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {CalculatorScreen} from './src/screens';
import { styles } from './src/theme';

const App = () => {

  return (
  <SafeAreaView style={styles.background}>
    <StatusBar backgroundColor='black' barStyle='light-content'/>
    <CalculatorScreen />
  </SafeAreaView>
  );
};

export default App;
