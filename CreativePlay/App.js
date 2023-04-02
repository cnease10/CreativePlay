import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { TextNative } from './components/text-native';
import { TextInputNative } from './components/text-input-native';
export default function App() {
  return (
    <ScrollView>
      <TextNative/>
      <TextInputNative/>
    </ScrollView>
  );
}
