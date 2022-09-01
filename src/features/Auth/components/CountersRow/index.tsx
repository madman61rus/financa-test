import React from 'react';
import {View} from 'react-native';
import Counter from '../Counter';
import styles from './styles';

interface CountersRowProps {
  value: number;
}

const CountersRow = ({value}: CountersRowProps) => {
  let valueString = value.toString();

  if (valueString.length < 9) {
    const needString = Array(9 - valueString.length).fill('0');
    valueString = `${needString}${valueString}`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Counter value={valueString[0] || '0'} />
        <Counter value={valueString[1] || '0'} />
        <Counter value={valueString[2] || '0'} />
      </View>
      <View style={styles.block}>
        <Counter value={valueString[3] || '0'} />
        <Counter value={valueString[4] || '0'} />
        <Counter value={valueString[5] || '0'} />
      </View>
      <View style={styles.block}>
        <Counter value={valueString[6] || '0'} />
        <Counter value={valueString[7] || '0'} />
        <Counter value={valueString[8] || '0'} />
      </View>
    </View>
  );
};

export default CountersRow;
