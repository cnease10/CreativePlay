import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextNative = () => {
  return (
    <View style={styles.container}>
      <Text>App.js file text component.</Text>
      <Text> Text component == paragraph tag</Text>
      <Text>This text component is inside a view</Text>
      <Text>View component == non-scrolling div tag</Text>
      <Text>ScrollView component == scrolling div</Text>
      <Text>There are certain Core Components that are IOS/Android backed
        Native Components
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default TextNative;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});