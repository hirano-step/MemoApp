import {
  View, StyleSheet, TextInput,
} from 'react-native';

import AppBar from '../components/AppBar';
import CirclButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeybordSafeView';

export default function MemoCreateScreen() {
  return (
    <KeyboardSafeView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CirclButton name="check" />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
