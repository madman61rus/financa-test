import {useIsFocused} from '@react-navigation/native';
import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import {convertWidth} from '../../../../utils/dimensions';
import styles from './styles';

interface LoadIndicatorProps {
  onEnd: () => void;
}

const LoadIndicator = ({onEnd}: LoadIndicatorProps) => {
  const indicatorWidth = useSharedValue(0);
  const isFocused = useIsFocused();

  const handleAnimationEnd = useCallback(() => {
    onEnd();
  }, [onEnd]);

  useEffect(() => {
    if (isFocused) {
      indicatorWidth.value = withTiming(
        convertWidth(120),
        {
          duration: 4500,
        },
        () => runOnJS(handleAnimationEnd)(),
      );
    }
  }, [handleAnimationEnd, isFocused, indicatorWidth]);

  useEffect(() => {
    if (!isFocused) {
      indicatorWidth.value = 0;
    }
  }, [isFocused, indicatorWidth]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: indicatorWidth.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.indicator, animatedStyles]} />
    </View>
  );
};

export default LoadIndicator;
