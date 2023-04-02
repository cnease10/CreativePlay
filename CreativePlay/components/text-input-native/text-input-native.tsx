import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextInputNative = () => {
const [text, setText] = useState('');
  return (
    <View >
      <TextInput
        placeholder="I am a textbox"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text>TextInput has an onChangeText prop that is called every time text is changed</Text>
      <Text>{text}</Text>
    </View>
  );
}

export default TextInputNative;