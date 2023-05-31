import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UploadImage from './UploadImage';
export default function App() {
  return (
    <View style={styles.container}>
      <UploadImage/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});