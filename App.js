import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageChoisePage from './src/pages/ImageChoisePage/ImageChoise';

export default function App() {
  return (
    <ImageChoisePage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
