import React, {useMemo} from 'react';
import styles from './styles';
import {View, TextInput, ViewStyle, StyleSheet, Text} from 'react-native';

interface InputProps {
  value: string;
  onTextChange: (value: string) => void;
  label: string;
  hasError: boolean;
  style?: ViewStyle;
}

const Input = ({value, onTextChange, label, hasError, style}: InputProps) => {
  const errorStyle = useMemo(
    () => ({
      borderColor: hasError ? 'red' : '#000',
    }),
    [hasError],
  );

  return (
    <View style={StyleSheet.flatten([styles.container, style, errorStyle])}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onTextChange}
      />
    </View>
  );
};

export default Input;
