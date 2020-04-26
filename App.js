import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Register from "./src/components/Register"

export default function App() {
  return (
    <View style={styles.container}>
      <Register></Register>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
});