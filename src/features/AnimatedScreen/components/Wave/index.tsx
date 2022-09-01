import React, {ReactElement, useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import WaveThird from '../../../../images/wave_3.svg';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface WaveProps {
  image: ReactElement;
}

const Wave = ({image}: WaveProps) => {
  const offset = useSharedValue(-250);

  useEffect(() => {
    offset.value = withRepeat(
      withTiming(-10, {
        duration: 4500,
        easing: Easing.bezier(0.25, 0.1, 0.2, 1),
      }),
      1000,
      true,
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[{width: '100%'}, animatedStyles]}>
        {image}
      </Animated.View>
    </View>
  );
};

export default Wave;
