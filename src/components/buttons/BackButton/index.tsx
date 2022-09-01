import React from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import BackImage from '../../../images/back.svg';

interface BackButtonProps {
  onPress: () => void;
}

const BackButton = ({onPress}: BackButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <BackImage />
    </TouchableOpacity>
  );
};

export default BackButton;
