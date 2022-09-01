import React, {useMemo} from 'react';
import styles from './styles';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import ShevronImage from '../../../images/chevron_right.svg';

export enum ButtonStyle {
  FILLED_GREEN,
  OUTLINED,
}

interface RoundedButtonProps {
  title: string;
  subtitle?: string;
  onPress: () => void;
  type?: ButtonStyle;
  style?: ViewStyle;
  loading?: boolean;
}

const RoundedButton = ({
  title,
  subtitle,
  onPress,
  type = ButtonStyle.OUTLINED,
  style = {},
  loading = false,
}: RoundedButtonProps) => {
  const containerStyle = useMemo(() => {
    if (type === ButtonStyle.FILLED_GREEN) {
      return {
        backgroundColor: '#09CB01',
      };
    }

    if (type === ButtonStyle.OUTLINED) {
      return {
        borderWidth: 2,
        borderColor: '#FFF',
      };
    }

    return StyleSheet.create({});
  }, [type]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([styles.container, containerStyle, style])}>
      <View style={styles.flexOne} />
      {loading ? (
        <View style={styles.textContainer}>
          <ActivityIndicator color="#FFF" />
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      )}
      <View style={styles.shevronContainer}>
        <ShevronImage />
      </View>
    </TouchableOpacity>
  );
};

export default RoundedButton;
