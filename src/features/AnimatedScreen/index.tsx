import React, {useCallback} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Wave from './components/Wave';
import WaveThird from '../../images/wave_3.svg';
import WaveFirst from '../../images/wave_2.svg';
import LogoImage from '../../images/logo.svg';
import LoadIndicator from './components/LoadIndicator';

import ScreenRoutes from '../../navigation/routes';
import styles from './styles';
import {AnimatedScreenProps} from '../../types/navigation/rootStack';

const AnimatedScreen = ({navigation}: AnimatedScreenProps) => {
  const handleLoadEnd = useCallback(() => {
    navigation.navigate(ScreenRoutes.AUTH_STACK, {
      screen: ScreenRoutes.AUTH_SCREEN,
    });
  }, [navigation]);

  return (
    <LinearGradient colors={['#11BDFD', '#0A83F8']} style={styles.screen}>
      <View style={styles.fullScreen}>
        <View style={styles.fullScreen}>
          <Wave image={<WaveThird />} />
        </View>
        <View style={styles.logo}>
          <LogoImage />
        </View>
        <View style={styles.fullScreen}>
          <Wave image={<WaveFirst />} />
        </View>
        <View style={styles.indicator}>
          <LoadIndicator onEnd={handleLoadEnd} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default AnimatedScreen;
