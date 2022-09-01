import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import BackButton from '../../buttons/BackButton';

interface TitleWithBackProps {
  onBackPress: () => void;
  title: string;
}

const TitleWithBack = ({onBackPress, title}: TitleWithBackProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <BackButton onPress={onBackPress} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightSide} />
    </View>
  );
};

export default TitleWithBack;
