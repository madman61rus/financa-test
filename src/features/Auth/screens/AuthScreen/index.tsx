import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import LogoImage from '../../../../images/logo.svg';
import AuthImage from '../../../../images/auth_image.svg';
import CountersRow from '../../components/CountersRow';
import RoundedButton, {
  ButtonStyle,
} from '../../../../components/buttons/RoundedButton';
import {convertHeight, convertWidth} from '../../../../utils/dimensions';
import {AuthScreenProps} from '../../../../types/navigation/authStack';
import ScreenRoutes from '../../../../navigation/routes';

const AuthScreen = ({navigation}: AuthScreenProps) => {
  const handleLoginPress = useCallback(() => {
    navigation.navigate(ScreenRoutes.SPLASH_SCREEN, {
      screen: ScreenRoutes.AUTH_STACK,
      params: {
        screen: ScreenRoutes.LOGIN_SCREEN,
      },
    });
  }, [navigation]);

  return (
    <LinearGradient colors={['#11BDFD', '#0A83F8']} style={styles.screen}>
      <View style={styles.logoContainer}>
        <LogoImage width={convertWidth(147)} height={convertHeight(64)} />
      </View>
      <View style={styles.authImage}>
        <AuthImage width={convertWidth(329)} height={convertHeight(245)} />
      </View>
      <Text style={styles.title}>Welcome to Payeer</Text>
      <Text style={styles.subTitle}>TOTAL USERS REGISTERED</Text>
      <CountersRow value={23456765} />
      <RoundedButton
        title="CREATE ACCOUNT"
        subtitle="IN LESS THEN 30 seconds"
        type={ButtonStyle.FILLED_GREEN}
        style={styles.createButton}
        onPress={() => {}}
      />
      <RoundedButton
        title="LOGIN"
        subtitle="I HAVE AN ACCOUNT"
        style={styles.loginButton}
        onPress={handleLoginPress}
      />
    </LinearGradient>
  );
};

export default AuthScreen;
