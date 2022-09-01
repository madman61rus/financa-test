import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface CounterProps {
  value: string;
}

const Counter = ({value}: CounterProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Counter;
